
const AirlineFilter = ({ value, onChange, airlinesList = [] }) => (
  <div className="flex flex-col gap-1 max-h-32 overflow-y-auto pr-1">
    {airlinesList.map(airline => (
      <label key={airline} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-blue-50 rounded px-1 py-0.5">
        <input
          type="checkbox"
          value={airline}
          checked={value.includes(airline)}
          onChange={e => {
            if (e.target.checked) {
              onChange([...value, airline]);
            } else {
              onChange(value.filter(a => a !== airline));
            }
          }}
          className="accent-blue-600 rounded"
        />
        <span>{airline}</span>
      </label>
    ))}
  </div>
);

export default AirlineFilter;
