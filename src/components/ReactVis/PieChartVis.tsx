import { RadialChart } from "react-vis";
import PointsContainer from "../PointsContainer/PointsContainer";
import { RadialChartVisContainer } from "./PieChartVis.styled";
import { PieChartContentWrapper } from "../Recharts/PieChartCustomized.styled";

const data = [
  { angle: 1, color: "#FFF", name: "blue" },
  { angle: 2, color: "#000", name: "yellow" },
  { angle: 5, color: "#1E96BE", name: "cyan" },
  { angle: 3, color: "#DA70BF", name: "magenta" },
  { angle: 5, color: "#F6D18A", name: "yellow again" },
];

const PieChartVis = () => {
  return (
    <RadialChartVisContainer>
      <RadialChart
        data={data}
        labelsRadiusMultiplier={1.6}
        labelsStyle={{ fontSize: 16, fill: "#222" }}
        width={400}
        height={400}
        innerRadius={120}
        radius={150}
      />
      <PieChartContentWrapper>
        <PointsContainer />
      </PieChartContentWrapper>
    </RadialChartVisContainer>
  );
};

export default PieChartVis;
