import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const Chartbar = () => {
  const data = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "data",
        data: [2, 3, 1, 4],
        backgroundColor: "rgba(245, 159, 0, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
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

  ChartJS.defaults.color = "rgba(255, 255, 255, 1)";
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

