// import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

export const LineChart = (props) => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  return <ReactEcharts className="line" option={option} />;
};
