import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

<LineChart width={600} height={300} data={results}>
  <XAxis dataKey="destination" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="price.total" stroke="#8884d8" />
</LineChart>
