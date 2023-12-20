import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const PieComponent = (props) => {
  const data = {
    labels: ["Male", "Female", "Unknown"],
    datasets: [
      {
        label: "Groups",
        data: props.data,
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 5,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default PieComponent;
