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
    <div
      className="
      bg-white rounded-2xl shadow-lg border border-gray-100
      p-4 sm:p-5 md:p-6
      flex flex-col gap-3
      hover:shadow-xl transition
    "
    >
      {/* TOP ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
          {from} <span className="text-gray-400">→</span> {to}
        </h3>

        <span
          className="
          text-xs bg-blue-100 text-blue-700
          px-2 py-1 rounded-full font-semibold
          w-fit
        "
        >
          {airline}
        </span>
      </div>

      {/* DATES */}
      <div
        className="
        flex flex-col sm:flex-row
        sm:items-center sm:justify-between
        text-sm text-gray-600 gap-1
      "
      >
        <span>
          Depart: <b>{departureDate}</b>
        </span>
        <span>
          Arrive: <b>{arrivalDate}</b>
        </span>
      </div>

      {/* PRICE + BUTTON */}
      <div
        className="
    flex flex-col
    sm:flex-row
    sm:flex-wrap
    sm:items-center
    sm:justify-between
    gap-3 mt-2
  "
      >
        <span className="text-xl md:text-2xl font-bold text-blue-700">
          {currency}
          {price}
        </span>

        <button
          className="
      w-full
      sm:w-auto
      max-w-full
      px-4 py-2
      bg-blue-600 text-white rounded-lg shadow
      hover:bg-blue-700 transition
      text-sm font-semibold
      whitespace-nowrap
    "
          onClick={() => onViewDetails?.(data)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
