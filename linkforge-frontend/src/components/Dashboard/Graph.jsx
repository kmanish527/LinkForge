import React from "react";
import { Line } from "react-chartjs-2";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const createGradient = (ctx, chartArea) => {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, "rgba(79, 70, 229, 0)");
  gradient.addColorStop(1, "rgba(79, 70, 229, 0.4)");
  return gradient;
};

const Graph = ({ graphData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full h-80 flex flex-col items-center justify-center bg-slate-50 rounded-lg">
        <DotLottieReact
          src="https://lottie.host/dd482c72-0a34-45b8-bc6d-e81ff3afa4ec/lDc8nay5DH.lottie"
          loop
          autoplay
          style={{ width: "300px" }}
        />
        <p className="text-gray-500 mt-4">Loading Chart...</p>
      </div>
    );
  }

  if (!graphData || graphData.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-slate-50 rounded-lg">
        <p className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
            No Data For This Time Period
        </p>
      </div>
    );
  }

  if (!graphData || graphData.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-slate-50 rounded-lg">
        <p className="text-gray-500"></p>
      </div>
    );
  }

  const labels = graphData.map((item) => item.clickDate);
  const clickCounts = graphData.map((item) => item.count);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Clicks",
        data: clickCounts,
        borderColor: "#4f46e5",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return createGradient(ctx, chartArea);
        },
        pointBackgroundColor: "#4f46e5",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#4f46e5",
        pointRadius: 5,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleFont: { size: 16, weight: "bold" },
        bodyFont: { size: 14 },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#e2e8f0",
          drawBorder: false,
        },
        ticks: {
          callback: function (value) {
            if (Number.isInteger(value)) {
              return value;
            }
          },
          font: {
            size: 12,
            family: "sans-serif",
          },
          color: "#64748b",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "sans-serif",
          },
          color: "#64748b",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return <Line className="w-full" data={data} options={options} />;
};

export default Graph;
