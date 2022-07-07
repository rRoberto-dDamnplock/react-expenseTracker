import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value) ///thi is for the dynamic values of the chart, for the css bars to grow.
      const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (

        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />

      ))}
    </div>
  );
};

export default Chart;
