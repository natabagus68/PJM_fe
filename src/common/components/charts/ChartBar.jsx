import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import moment from "moment";
import { useEffect, useState } from "react";

ChartJS.register(...registerables);

export const Chartbar = ({ colors, data }) => {
  const [datam, setDatas] = useState(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Working Time (Hour)",
        position: "left",
        color: "rgba(81, 78, 78, 1)",
      },
    },
  };

  useEffect(() => {
    const datas = {
      labels: data.map((item) => {
        return item.name;
      }),
      datasets: [
        {
          label: data.map((item) => item.name),
          data: data.map((item) => item.value),
          backgroundColor: colors,
          borderColor: "rgba(255, 255, 255, 1)",
        },
      ],
    };
    setDatas(datas);
  }, [data]);
  if (datam !== null)
    return (
      <>
        <Bar data={datam} options={options} width={`100%`} height={"100%"} />
      </>
    );
};
