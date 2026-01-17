export default function FlightCard({ data }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4">
      
      {/* Image */}
      <img
        src={data.image}
        alt={data.destination}
        className="w-24 h-24 rounded-lg object-cover"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">
          {data.from} → {data.destination}
        </h3>

        <p className="text-sm text-gray-500">
          {data.departureDate} • {data.returnDate}
        </p>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-lg font-bold text-[#0000DD]">
          €{data.price}
        </p>
        <button className="mt-2 text-sm text-[#0000DD] underline">
          View Deal
        </button>
      </div>
    </div>
  );
}
