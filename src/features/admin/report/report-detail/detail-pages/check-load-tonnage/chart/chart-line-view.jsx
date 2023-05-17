import { useEffect, useRef, useState } from "react";
import Chart from "@common/components/Chart";
import { Line } from "react-chartjs-2";
export const ChartLine = () => {
  const ctx = useRef();
  const chart = useRef();

  const data = {
    labels: ["Red", "Orange", "Blue"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Total Tonnage</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug", "Sep"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7, 2],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 2, 5],
              },
            ],
          }}
          width={200} // Ukuran lebar grafik
          height={50} // Ukuran tinggi grafik
          options={{
            maintainAspectRatio: true, // Menonaktifkan pengaturan aspek rasio
          }}
        />
      </div>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Channel 1 - Left Front (LF)</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug", "Sep"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7, 2],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 2, 5],
              },
            ],
          }}
          width={200} // Ukuran lebar grafik
          height={50} // Ukuran tinggi grafik
          options={{
            maintainAspectRatio: true, // Menonaktifkan pengaturan aspek rasio
          }}
        />
      </div>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Channel 2 - Left Rear (LR)</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug", "Sep"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7, 2],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 2, 5],
              },
            ],
          }}
          width={200} // Ukuran lebar grafik
          height={50} // Ukuran tinggi grafik
          options={{
            maintainAspectRatio: true, // Menonaktifkan pengaturan aspek rasio
          }}
        />
      </div>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Channel 3 - Right Front (RF)</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug", "Sep"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7, 2],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 2, 5],
              },
            ],
          }}
          width={200} // Ukuran lebar grafik
          height={50} // Ukuran tinggi grafik
          options={{
            maintainAspectRatio: true, // Menonaktifkan pengaturan aspek rasio
          }}
        />
      </div>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Channel 4 - Right Rear (RR)</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug", "Sep"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7, 2],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 2, 5],
              },
            ],
          }}
          width={200} // Ukuran lebar grafik
          height={50} // Ukuran tinggi grafik
          options={{
            maintainAspectRatio: true, // Menonaktifkan pengaturan aspek rasio
          }}
        />
      </div>
    </>
  );
};

