import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import moment from "moment";

ChartJS.register(...registerables);

export const Chartbar = ({ colors, data }) => {
  const datas = {
    labels: data.map((item) => {
      return moment(item.name).format("LT");
    }),
    datasets: [
      {
        label: "data",
        data: data.map((item) => item.value),
        backgroundColor: colors,
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
      <Bar data={datas} options={options} height={`100vh`} width={`100vh`} />
    </>
  );
};
