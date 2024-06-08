"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stat = () => {
  const data = {
    labels: ["Francais", "Anglais", "Arabe"],
    datasets: [
      {
        label: "Profits",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        data: [65, 59, 80],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    
      <div className="w-[300px] h-[350px] ml-9 mt-7">
        <Doughnut data={data} options={options} />
      </div>
  );
};

export default Stat;
