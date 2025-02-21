import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const chartRef = useRef(null); // Reference for the chart

  const data = {
    labels: ['Bar 1', 'Bar 2', 'Bar 3'],  // Labels for the x-axis
    datasets: [
      {
        label: 'Height',
        data: [30, 90, 60],  // Heights of the bars
        backgroundColor: ['#2f9cda', 'white', '#98c3dc'],  // Different colors for the bars
        borderColor: ['#6666ff', '#66ff66', '#ff6666'],      // Border colors for the bars
        borderWidth: 0,  // Thickness of the border
      },
    ],
  };

  const options = {
    responsive: true,             // Make the chart responsive
    maintainAspectRatio: false,   // Allow the chart to stretch to its container
    scales: {
      x: {
        display: false,           // Hide x-axis
      },
      y: {
        display: false,           // Hide y-axis
      },
    },
    plugins: {
      tooltip: {
        enabled: false,           // Disable tooltips
      },
      legend: {
        display: false,           // Hide legend
      },
    },
    animation: {
      duration: 500,             // Duration of the animation
      easing: 'easeOutLinear',     // Animation easing function
    },
  };

  // Function to handle the intersection observer callback
  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set visible to true when in viewport
      } else {
        setIsVisible(false); // Set visible to false when out of viewport
      }
    });
  };

  useEffect(() => {
    const chartElement = chartRef.current; // Store ref in a variable
  
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1, // Trigger when at least 10% of the chart is visible
    });
  
    if (chartElement) {
      observer.observe(chartElement);
    }
  
    return () => {
      if (chartElement) {
        observer.unobserve(chartElement);
      }
    };
  }, []);
  

  return (
    <div style={{ height: '80%', width: '80%' }} ref={chartRef}>
      {isVisible && <Bar data={data} options={options} />} {/* Render chart only when visible */}
    </div>
  );
};

export default BarChart;