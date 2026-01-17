import { Search } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";

export default function Filters({ onSearch, loading }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* FROM */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">From</label>
          <input
            type="text"
            value={origin}
            placeholder="City or airport"
            onChange={(e) => setOrigin(e.target.value)}
            className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none"
          />
        </div>
        {/* TO */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">To</label>
          <input
            type="text"
            value={destination}
            placeholder="City or airport"
            onChange={(e) => setDestination(e.target.value)}
            className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none"
          />
        </div>
        {/* DEPARTURE */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Departure</label>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none"
          />
        </div>
        {/* RETURN */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">Return</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 outline-none"
          />
        </div>
        {/* SEARCH BUTTON */}
        <div>
          <Button
            onClick={() =>
              onSearch({ origin, destination, departure, returnDate })
            }
            className={`w-full h-12 flex items-center justify-center gap-2 cursor-pointer ${loading ? 'opacity-60 pointer-events-none' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-t-2 border-gray-300 border-t-blue-600 rounded-full mr-2"></span>
            ) : (
              <Search size={16} />
            )}
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}