import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const ChartLine = ({ datas, height, width, maxValue = 300 }) => {
  const setup = [
    {
      color: "#FC9D68",
      lable: "Total",
    },
    {
      color: "#2BBA23",
      lable: "Actual",
    },
  ];

  const data = {
    labels: datas?.map((item, i) => {
      return item.name;
    }),
    // datasets: datas?.map((item, i) => {
    //   return {
    //     label: setup[i]?.lable,
    //     data: item,
    //     datasetStrokeWidth: 3,
    //     pointDotStrokeWidth: 4,
    //     backgroundColor: setup[i]?.color,
    //     borderColor: setup[i]?.color,
    //     tension: 0.0,
    //     pointRadius: 4,
    //     pointBackgroundColor: "#FFF",
    //     borderWidth: 2.5,
    //   };
    // }),
    datasets: [
      {
        label: "",
        data: datas.map((item) => item.value),
        borderColor: "rgba(116, 184, 22, 1)",
        backgroundColor: "rgba(116, 184, 22, 1)",
        pointBackgroundColor: "#FFF",
        datasetStrokeWidth: 100,
        pointDotStrokeWidth: 100,
        tension: 0.0,
        pointRadius: 6,
        borderWidth: 4.5,
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
      <Line data={data} options={options} height={height} width={width} />
    </>
  );
};
