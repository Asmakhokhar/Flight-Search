import { useState, useMemo } from "react";

export default function useFlightFilters(flightsData) {
  const [filters, setFilters] = useState({
    stops: null,
    priceRange: [0, 1000],
    airlines: [],
  });

  const updateFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const filteredFlights = useMemo(() => {
    return flightsData.filter(flight => {
      if (filters.stops !== null && flight.stops !== filters.stops) return false;
      if (
        flight.price < filters.priceRange[0] ||
        flight.price > filters.priceRange[1]
      )
        return false;
      if (
        filters.airlines.length > 0 &&
        !filters.airlines.includes(flight.airline)
      )
        return false;
      return true;
    });
  }, [flightsData, filters]);

  return { filters, updateFilter, filteredFlights };
}
