import { Doughnut } from "react-chartjs-2";

export const ChartHalfDoughnut = ({ colors = "rgba(255, 99, 132, 0.8)" }) => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40],
        backgroundColor: [colors, "rgba(184, 182, 182, 1)"],
        borderColor: ["rgba(255, 99, 132, 0.8)", "rgba(184, 182, 182, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: -90,
    circumference: 180,
    cutout: "60%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <h1 className="text-[25px] font-[800] text-[#514E4E] absolute bottom-8 left-11">
          72.2%
        </h1>
      </div>
    </>
  );
};
