export default function FlightCard({ data, onViewDetails }) {
  // Amadeus flight offer structure
  const itinerary = data.itineraries?.[0];
  const segment = itinerary?.segments?.[0];
  const lastSegment = itinerary?.segments?.[itinerary.segments.length - 1];
  const price = data.price?.total;
  const currency = data.price?.currency || "€";
  const airline = segment?.carrierCode;
  const from = segment?.departure?.iataCode;
  const to = lastSegment?.arrival?.iataCode;
  const departureDate = segment?.departure?.at?.slice(0, 10);
  const arrivalDate = lastSegment?.arrival?.at?.slice(0, 10);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-xl transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">
          {from} <span className="text-gray-400">→</span> {to}
        </h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">{airline}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Depart: <b>{departureDate}</b></span>
        <span>Arrive: <b>{arrivalDate}</b></span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-2xl font-bold text-blue-700">{currency}{price}</span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm font-semibold"
          onClick={() => onViewDetails?.(data)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
