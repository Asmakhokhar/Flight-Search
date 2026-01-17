import Sidebar from "../components/sidebar";
import { useState } from "react";
import Header from "../components/header";
import FlightList from "../components/flights/FlightsList";
import FlightDetailsModal from "../components/flights/FlightDetailsModal";
import { getToken, searchFlights } from "../services/amadeus";
import PriceGraph from "../components/ui/PriceGraph";
import LandingHero from "../components/LandingHero";
import PopularCountries from "../components/PopularCountries";

export default function Home() {
  // For demo: store recent searches in state (could use localStorage for persistence)
  const [recentSearches, setRecentSearches] = useState([]);

  const [stops, setStops] = useState("");
  const [price, setPrice] = useState(2000);
  const [airline, setAirline] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

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
    setRecentSearches((prev) => [
      { origin, destination },
      ...prev.filter(s => s.origin !== origin || s.destination !== destination)
    ].slice(0, 5));
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

  
  const filteredResults = results.filter((flight) => {
    // Stops
    const stopsCount = flight.itineraries?.[0]?.segments?.length - 1;
    if (
      stops !== "" &&
      String(stopsCount) !== stops &&
      !(stops === "2" && stopsCount > 1)
    )
      return false;
    
    if (price && flight.price?.total && Number(flight.price.total) > price)
      return false;
   
    if (
      airline &&
      flight.itineraries?.[0]?.segments?.[0]?.carrierCode !== airline
    )
      return false;
    return true;
  });

  return (
    <>
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        origin={origin}
        setOrigin={setOrigin}
        stops={stops}
        setStops={setStops}
        price={price}
        setPrice={setPrice}
        airline={airline}
        setAirline={setAirline}
        onSearch={handleSearch}
        airlines={Array.from(
          new Set(
            results
              .map((f) =>
                f.itineraries?.[0]?.segments?.[0]?.carrierCode
                  ? {
                      code: f.itineraries[0].segments[0].carrierCode,
                      name: f.itineraries[0].segments[0].carrierCode,
                    }
                  : null,
              )
              .filter(Boolean),
          ),
        )}
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

      {/* PRICE GRAPH & RESULTS */}
      {hasSearched && (
        <div className="p-6">
          {filteredResults.length > 0 && <>
            <h2 className="text-xl font-bold mb-2">Results</h2>
            <PriceGraph data={filteredResults} />
          </>}
          <FlightList
            results={filteredResults}
            loading={loading}
            hasSearched={hasSearched}
            onViewDetails={setSelectedFlight}
          />
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
