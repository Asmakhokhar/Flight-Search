import FlightCard from "./FlightCard";

export default function FlightList({ results, loading, hasSearched, onViewDetails }) {
  if (!hasSearched) return null;
  if (loading) return <p>Loading...</p>;
  if (!results || results.length === 0) return <p>No flights found</p>;
  return (
    <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4 sm:gap-5 lg:gap-6
    w-full
  "
>
      {results.map((item, index) => (
        <FlightCard key={index} data={item} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}

