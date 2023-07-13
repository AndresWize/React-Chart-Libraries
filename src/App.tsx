import "./App.css";
import DoughnutChart from "./components/ChartJS2/DoughnutChart";
import MyPieChart from "./components/Recharts/PieChart";
import CustomPieChart from "./components/Recharts/PieChartCustomized";
import PieChartVis from "./components/ReactVis/PieChartVis";
import { styled } from "styled-components";

const ChartContainer = styled.div`
  max-width: 400px;
`;

function App() {
  return (
    <>
      <h1>Recharts vs ChartJS vs React Vis</h1>
      <div className="app__container">
        <ChartContainer>
          <MyPieChart />
          <p>Created with Recharts - Uses relative-abosule positioning.</p>
        </ChartContainer>
        <ChartContainer>
          <DoughnutChart />
          <p>Created with React Chartjs 2</p>
        </ChartContainer>
        <ChartContainer>
          <CustomPieChart />
          <p>
            Created with Recharts - The text is passed as content prop to the
            Label component provided by Recharts. Harder to position and also
            since the Label component only support SVG as its content it has to
            be wrapped by a foreignObject SVG element to be able to add HTML
            within it.
          </p>
        </ChartContainer>
        <ChartContainer>
          <PieChartVis />
          <p>
            Created with React-Vis - Positioned also using relative-absolute CSS
            because it's children has to be SVG elements which makes it more
            complicated
          </p>
        </ChartContainer>
      </div>
    </>
  );
}

export default App;
