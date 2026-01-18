
const stopsOptions = [
  { label: "Any", value: null },
  { label: "Non-stop", value: 0 },
  { label: "1 Stop", value: 1 },
  { label: "2+ Stops", value: 2 },
];

const StopsFilter = ({ value, onChange }) => (
  <div className="flex flex-col gap-1">
    <div className="flex gap-2">
      {stopsOptions.map(opt => (
        <button
          key={opt.label}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1 rounded-full border text-sm transition-all
            ${value === opt.value || (opt.value === null && value == null)
              ? 'bg-blue-600 text-white border-blue-600 shadow'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}
          `}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export default StopsFilter;
