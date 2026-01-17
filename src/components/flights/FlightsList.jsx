import FlightCard from "./FlightCard";

export default function FlightList({ results, loading, hasSearched, onViewDetails }) {
  if (!hasSearched) return null;
  if (loading) return <p>Loading...</p>;
  if (!results || results.length === 0) return <p>No flights found</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {results.map((item, index) => (
        <FlightCard key={index} data={item} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}

