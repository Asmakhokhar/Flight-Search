import React from "react";

export default function PriceFilter({ price, setPrice, min = 0, max = 2000 }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">Max Price</label>
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full"
      />
      <span className="text-xs mt-1">Up to ${price}</span>
    </div>
  );
}
