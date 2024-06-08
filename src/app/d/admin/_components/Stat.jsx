"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Stat = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Profits',
        backgroundColor: 'rgba(200, 102, 255, 0.2)',
        borderColor: 'rgba(200, 102, 255, 1)',
        pointBackgroundColor: 'rgba(200, 102, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(200, 102, 255, 1)',
        borderWidth: 2,
        data: [0, 2000, 5000, 3000, 2000, 6000, 7000],
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-[600px] h-[400px]'>
      <Line data={data} options={options} />
    </div>
  );
};

export default Stat;
