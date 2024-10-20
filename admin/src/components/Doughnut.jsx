import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ values, title }) {
  const labels = ["Good", "Average", "Poor", "Very Poor"];
  const total = values.reduce((acc, value) => acc + value, 0);
  const dataWithPercentages = values.map((value) =>
    ((value / total) * 100).toFixed(2)
  );
  const data = {
    labels: labels.map(
      (label, index) => `${label}(${dataWithPercentages[index]})%`
    ),
    datasets: [
      {
        label: "Reviews",
        data: values,
        backgroundColor: [
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.4)",
          "rgba(54,162,235,0.6)",
          "rgba(54,162,235,0.8)",
        ],
        borderColor: [
          "rgba(54,162,235,1)",
          "rgba(54,162,235,1)",
          "rgba(54,162,235,1)",
          "rgba(54,162,235,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "50%",
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}% (${value})`;
          },
        },
      },
    },
  };

  return (
    <div className="max-h-96 my-10">
      <div className="flex-col">
        <div className="w-80 h-96 bg-white shadow-lg rounded-xl border-2 border-gray-300 p-8">
          <h2 className="text-lg text-center font-bold ml-0">{title}</h2>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
