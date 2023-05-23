import { useEffect, useRef, useState } from "react";
import Chart from "@common/components/Chart";
import { Line } from "react-chartjs-2";

export default function TonnageChart({ data = null }) {
  const ctx = useRef();
  const chart = useRef();

  return (
    <>
      <div className="w-full border-y py-8 px-8">
        <h1 className="font-bold">Total Tonnage</h1>
        {/* chart */}
        <Line
          datasetIdKey="id"
          data={{
            labels: data?.loadTonnage?.map((e, i) => i + 1),
            datasets: [
              {
                label: "TOTAL Actual Load",
                data: data?.loadTonnage?.map((e, i) => e.totalActLoad),
              },
              {
                label: "TOTAL Actual Monitor Load",
                data: data?.loadTonnage?.map((e, i) => e.totalLoadMonitor),
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
            labels: data?.loadTonnage?.map((e, i) => i + 1),
            datasets: [
              {
                label: "LF Actual",
                data: data?.loadTonnage?.map((e, i) => e.lfActLoad),
              },
              {
                label: "LF Monitor Load",
                data: data?.loadTonnage?.map((e, i) => e.lfLoadMonitor),
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
            labels: data?.loadTonnage?.map((e, i) => i + 1),
            datasets: [
              {
                label: "LR Actual Load",
                data: data?.loadTonnage?.map((e, i) => e.lrActLoad),
              },
              {
                label: "LR Monitor Load",
                data: data?.loadTonnage?.map((e, i) => e.lrLoadMonitor),
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
            labels: data?.loadTonnage?.map((e, i) => i + 1),
            datasets: [
              {
                label: "RF Actual",
                data: data?.loadTonnage?.map((e, i) => e.rfActLoad),
              },
              {
                label: "RF Monitor Load",
                data: data?.loadTonnage?.map((e, i) => e.rfLoadMonitor),
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
            labels: data?.loadTonnage?.map((e, i) => i + 1),
            datasets: [
              {
                label: "RR Actual",
                data: data?.loadTonnage?.map((e, i) => e.rrActLoad),
              },
              {
                label: "RR Monitor Load",
                data: data?.loadTonnage?.map((e, i) => e.rrLoadMonitor),
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
}
