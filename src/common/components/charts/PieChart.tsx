import { Pie } from "react-chartjs-2";

export const PieChart = ({ color }) => {
  const data = {
    labels: ["Hijau"],
    datasets: [
      {
        data: [30],
        backgroundColor: color,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <Pie data={data} options={options} width={"100%"} height={"100%"} />
    </>
  );
};
