import { useState } from "react";
import AppRouter from "./routes/app-router";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [origin, setOrigin] = useState("PAR");
  const [maxPrice, setMaxPrice] = useState(200);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <AppRouter
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      results={results}
      setResults={setResults}
      origin={origin}
      setOrigin={setOrigin}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
    />
  );
}

export default App;
