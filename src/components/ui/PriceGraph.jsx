
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function PriceGraph({ data }) {

  if (!data || data.length === 0) return <div className="text-center text-gray-400">No price data to show.</div>;

  const graphData = data.map((item, idx) => ({
    name: item.itineraries?.[0]?.segments?.[0]?.carrierCode || `Flight ${idx+1}`,
    price: Number(item.price?.total),
  }));

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h3 className="text-lg font-bold mb-4">Price Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
