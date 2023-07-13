import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "A", value: 50 },
  { name: "B", value: 30 },
  { name: "C", value: 20 },
];

const innerRadius = 50;
const outerRadius = 80;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const CustomPieChart = () => {
  const LabelContent = ({ viewBox }: any) => {
    const { cx, cy } = viewBox;

    return (
      <g>
        <foreignObject x={cx - 50} y={cy - 50} width={100} height={100}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <p>SVG Element</p>
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        fill="#8884d8"
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
        <Label content={LabelContent} position="center" />
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
