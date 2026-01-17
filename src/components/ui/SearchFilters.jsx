
import React from "react";
import StopsFilter from "./StopsFilter";
import AirlineFilter from "./AirlineFilter";
import PriceFilter from "./PriceFilter";

export default function SearchFilters({ stops, setStops, airline, setAirline, airlines, price, setPrice }) {
  return (
    <div className="flex gap-4 flex-wrap my-4">
      <StopsFilter stops={stops} setStops={setStops} />
      <AirlineFilter airline={airline} setAirline={setAirline} airlines={airlines} />
      <PriceFilter price={price} setPrice={setPrice} />
    </div>
  );
}
