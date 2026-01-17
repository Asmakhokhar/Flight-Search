import React from "react";

export default function StopsFilter({ stops, setStops }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">Stops</label>
      <select
        value={stops}
        onChange={(e) => setStops(e.target.value)}
        className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 outline-none"
      >
        <option value="">Any</option>
        <option value="0">Non-stop</option>
        <option value="1">1 Stop</option>
        <option value="2">2+ Stops</option>
      </select>
    </div>
  );
}
