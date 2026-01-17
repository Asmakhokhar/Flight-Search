import Sidebar from "../components/sidebar";
import { useState } from "react";
import Header from "../components/header";
import FlightList from "../components/flights/FlightsList";
import { searchFlights } from "../services/amadeus";

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
    setLoading(true);
    setHasSearched(true);

    try {
      const data = await searchFlights(origin, maxPrice);
      setResults(data);
    } catch (err) {
      console.error(err);
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

      {/* RESULTS */}
       {hasSearched && (
      <div className="p-6">
        <FlightList
          results={results}
          loading={loading}
        />
      </div>
        )}
    </>
  );
}
