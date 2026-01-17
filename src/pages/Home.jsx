import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";
import Header from "../components/header";
import FlightList from "../components/flights/FlightsList";
import FlightDetailsModal from "../components/flights/FlightDetailsModal";
import { getToken, searchFlights } from "../services/amadeus";

export default function Home() {
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

  const handleSearch = async ({ origin: o, destination: d, departure: dep, returnDate: ret }) => {
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
        "No flights found or server error."
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
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onSearch={handleSearch}
      />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* ERROR MESSAGE */}
      {error && <div className="text-red-500 p-4">{error}</div>}

      {/* RESULTS */}
      <div className="p-6">
        <FlightList
          results={results}
          loading={loading}
          hasSearched={hasSearched}
          onViewDetails={setSelectedFlight}
        />
      </div>
      <FlightDetailsModal open={!!selectedFlight} onClose={() => setSelectedFlight(null)} flight={selectedFlight} />
    </>
  );
}
