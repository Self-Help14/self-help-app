import React from 'react';
import { Line } from 'react-chartjs-2';
import '../App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const chartData = {
    labels: data.map(entry => entry.date),  // Dates for the x-axis
    datasets: [
      {
        label: 'Daily Rating',
        data: data.map(entry => entry.score),  // Scores for the y-axis
        fill: false,
        borderColor: '#7289DA',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Your Progress Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating',
        },
        min: -5,
        max: 5,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default Chart;
