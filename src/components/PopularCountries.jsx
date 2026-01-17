import React from "react";

const countries = [
  { name: "Turkey", code: "TR", image: "/images/turkey.jpg" },
  { name: "UAE", code: "AE", image: "/images/uae.jpg" },
  { name: "Saudi Arabia", code: "SA", image: "/images/suadi.jpg" },
  { name: "UK", code: "GB", image: "/images/uk.jpg" },
  { name: "USA", code: "US", image: "/images/usa.jpg" },
  { name: "Malaysia", code: "MY", image: "/images/malaysia.jpg" },
];

export default function PopularCountries() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((c) => (
          <div key={c.code} className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform cursor-pointer">
            <img src={c.image} alt={c.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{c.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
