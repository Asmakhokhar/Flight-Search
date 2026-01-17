
export default function FlightDetailsModal({ open, onClose, flight }) {
  if (!open || !flight) return null;
  const itinerary = flight.itineraries?.[0];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter: 'blur(6px)', background: 'rgba(0,0,0,0.25)'}}>
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-blue-100 animate-fadeIn">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-blue-700 text-3xl font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-extrabold mb-4 text-blue-700 text-center tracking-tight">Flight Details</h2>
        <div className="mb-4 flex flex-col gap-2 text-base text-gray-700">
          <div className="flex justify-between"><span className="font-semibold">Bookable Seats:</span> <span>{flight.numberOfBookableSeats}</span></div>
          <div className="font-semibold mt-2 mb-1">Itinerary:</div>
          {itinerary?.segments?.map((seg, idx) => (
            <div key={idx} className="ml-2 mb-2 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex justify-between"><span className="font-semibold">From:</span> <span>{seg.departure.iataCode} <span className="text-xs text-gray-400">({seg.departure.at})</span></span></div>
              <div className="flex justify-between"><span className="font-semibold">To:</span> <span>{seg.arrival.iataCode} <span className="text-xs text-gray-400">({seg.arrival.at})</span></span></div>
              <div className="flex justify-between"><span className="font-semibold">Carrier:</span> <span>{seg.carrierCode}</span></div>
              <div className="flex justify-between"><span className="font-semibold">Flight:</span> <span>{seg.number}</span></div>
              <div className="flex justify-between"><span className="font-semibold">Duration:</span> <span>{seg.duration}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
