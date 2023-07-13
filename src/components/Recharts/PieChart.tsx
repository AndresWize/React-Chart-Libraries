import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { PieChartContentWrapper } from "./PieChartCustomized.styled";
import PointsContainer from "../PointsContainer/PointsContainer";

const innerRadius = 90;
const outerRadius = 120;

const data = [
  { name: "A", value: 80, color: "#ff0000" },
  { name: "B", value: 45, color: "#00ff00" },
  { name: "C", value: 25, color: "#0000ff" },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const MyPieChart = () => {
  return (
    <div style={{ position: "relative" }}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <PieChartContentWrapper>
        <PointsContainer />
      </PieChartContentWrapper>
    </div>
  );
};

export default MyPieChart;
