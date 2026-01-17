import React from "react";

export default function LandingHero({ recentSearches = [], onSuggestionClick }) {
  const suggestions = [
    { origin: "LHE", destination: "DXB", label: "Lahore → Dubai" },
    { origin: "ISB", destination: "IST", label: "Islamabad → Istanbul" },
    { origin: "KHI", destination: "JED", label: "Karachi → Jeddah" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Find Your Next Flight</h2>
      <div className="mb-4">
        <span className="font-semibold">Recent Searches:</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {recentSearches.length === 0 && <span className="text-gray-400">No recent searches</span>}
          {recentSearches.map((s, i) => (
            <button
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200"
              onClick={() => onSuggestionClick(s)}
            >
              {s.origin} → {s.destination}
            </button>
          ))}
        </div>
      </div>
      <div>
        <span className="font-semibold">Suggestions:</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {suggestions.map((s, i) => (
            <button
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              onClick={() => onSuggestionClick(s)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
