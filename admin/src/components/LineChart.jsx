import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export function LineChart({values,title}){
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [
          {
            label: 'Sales in 2024',
            data: values, // Y-axis data points
            fill: false,
            borderColor: 'rgb(75, 192, 192)', // Line color
            tension: 0.1, // Line tension (smoothness)
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Position of legend
          },
          title: {
            display: true,
            text: 'Monthly Sales Data (2024)', // Chart title
          },
        },
      };

      return    <div className="min-h-96 ">
      <div className="flex-cols">
     
 <div className="w-[500px]  bg-white shadow-lg rounded-xl border-2 border-gray-400 p-8"> 
 <h2 className="text-lg text-center font-bold ml-0">{title}</h2>
   <Line data={data} options={options} />
 </div>
     
      </div>
</div>
}