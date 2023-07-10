import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect } from "react";

ChartJS.register(...registerables);

export const ChartLine = ({ datas, maxValue = 300 }) => {
  const data = {
    labels: datas?.map((item, i) => {
      return item.name;
    }),

    datasets: [
      {
        label: "",
        data: datas.map((item) => item.value),
        borderColor: "rgba(73, 202, 221, 1)",
        backgroundColor: "rgba(73, 202, 221, 0.2)",
        pointBackgroundColor: "#FFF",
        datasetStrokeWidth: 100,
        pointDotStrokeWidth: 100,
        tension: 0.0,
        pointRadius: 6,
        borderWidth: 4.5,
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      // y: {min: 0, max: Number(maxValue) * 1.2, stepSize: 0}
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} width={`100%`} height={"100%"} />
    </>
  );
};
