
import StopsFilter from "./StopsFilter";
import PriceFilter from "./PriceFilter";
import AirlineFilter from "./AirlineFilter";


const SearchFilters = ({ filters, updateFilter, airlinesList }) => (
  <aside className="bg-white rounded-lg shadow p-3 mt-10 flex flex-col gap-4 border border-gray-100">
    <StopsFilter value={filters.stops} onChange={val => updateFilter("stops", val)} />
    <PriceFilter value={filters.priceRange} onChange={val => updateFilter("priceRange", val)} />
    <AirlineFilter value={filters.airlines} onChange={val => updateFilter("airlines", val)} airlinesList={airlinesList} />
  </aside>
);

export default SearchFilters;
