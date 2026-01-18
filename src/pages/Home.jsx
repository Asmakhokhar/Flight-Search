import Sidebar from "../components/sidebar";
import { useState } from "react";
import Header from "../components/header";
import FlightList from "../components/flights/FlightsList";
import FlightDetailsModal from "../components/flights/FlightDetailsModal";
import { getToken, searchFlights } from "../services/amadeus";
import PriceGraph from "../components/ui/PriceGraph";
import LandingHero from "../components/LandingHero";
import PopularCountries from "../components/PopularCountries";
import useFlightFilters from "../hooks/useFlightFilters";
import SearchFilters from "../components/ui/SearchFilters";

export default function Home() {
  const [recentSearches, setRecentSearches] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Airlines list for filter dropdown
  const airlinesList = Array.from(
    new Set(
      results
        .map((f) => f.itineraries?.[0]?.segments?.[0]?.carrierCode)
        .filter(Boolean),
    ),
  );

  // Use custom filter hook
  const { filters, updateFilter, filteredFlights } = useFlightFilters(results);

  const handleSearch = async ({
    origin: o,
    destination: d,
    departure: dep,
    returnDate: ret,
  }) => {
    const origin = o.trim().toUpperCase();
    const destination = d.trim().toUpperCase();
    if (!origin) {
      alert("Please enter a valid origin airport code.");
      return;
    }
    if (!destination) {
      alert("Please enter a valid destination airport code.");
      return;
    }
    if (!dep) {
      alert("Please select a valid departure date.");
      return;
    }
    setOrigin(origin);
    setDestination(destination);
    setDeparture(dep);
    setReturnDate(ret);
    setRecentSearches((prev) =>
      [
        { origin, destination },
        ...prev.filter(
          (s) => s.origin !== origin || s.destination !== destination,
        ),
      ].slice(0, 5),
    );
    setLoading(true);
    setHasSearched(true);
    setError("");
    try {
      const token = await getToken();
      const data = await searchFlights(token, origin, destination, dep, ret);
      setResults(data);
    } catch (err) {
      setError(
        err?.response?.data?.error_description ||
          err?.response?.data?.message ||
          "No flights found or server error.",
      );
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        origin={origin}
        setOrigin={setOrigin}
        onSearch={handleSearch}
      />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* LANDING UI */}
      {!hasSearched && (
        <div className="p-6">
          <LandingHero
            recentSearches={recentSearches}
            onSuggestionClick={({ origin, destination }) => {
              setOrigin(origin);
              setDestination(destination);
            }}
          />
          <PopularCountries />
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && <div className="text-red-500 p-4">{error}</div>}

      {/* FILTERS, PRICE GRAPH & RESULTS */}
      {hasSearched && (
        <div className="p-2 sm:p-4 md:p-6 w-full overflow-x-hidden">
          <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 gap-4 items-stretch md:items-start w-full max-w-full">
            <div className="md:sticky md:top-24 md:self-start flex-shrink-0">
              <SearchFilters
                filters={filters}
                updateFilter={updateFilter}
                airlinesList={airlinesList}
              />
            </div>
            <div className="flex-1 flex flex-col w-full">
              {filteredFlights.length > 0 && (
                <>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h2 className="text-xl font-bold">Results</h2>
                    <div
                      className="w-full md:max-w-[520px] lg:max-w-[600px] xl:max-w-[700px] max-w-full"
                    >
                      <PriceGraph data={filteredFlights} />
                    </div>
                  </div>
                </>
              )}
              <FlightList
                results={filteredFlights}
                loading={loading}
                hasSearched={hasSearched}
                onViewDetails={setSelectedFlight}
              />
            </div>
          </div>
        </div>
      )}
      <FlightDetailsModal
        open={!!selectedFlight}
        onClose={() => setSelectedFlight(null)}
        flight={selectedFlight}
      />
    </>
  );
}
