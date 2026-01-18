
const PriceFilter = ({ value, onChange }) => {
  const [min, max] = value;
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={min}
        min={0}
        max={max}
        onChange={e => onChange([Number(e.target.value), max])}
        className="w-16 border border-gray-300 rounded px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
        placeholder="Min"
      />
      <span className="text-gray-400">-</span>
      <input
        type="number"
        value={max}
        min={min}
        onChange={e => onChange([min, Number(e.target.value)])}
        className="w-16 border border-gray-300 rounded px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
        placeholder="Max"
      />
    </div>
  );
};

export default PriceFilter;
