import React from "react";

export default function AirlineFilter({ airline, setAirline, airlines }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">Airline</label>
      <select
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
        className="h-12 px-4 rounded-md border border-gray-300 bg-white text-gray-900 outline-none"
      >
        <option value="">Any</option>
        {airlines.map((a) => (
          <option key={a.code} value={a.code}>
            {a.name}
          </option>
        ))}
      </select>
    </div>
  );
}
