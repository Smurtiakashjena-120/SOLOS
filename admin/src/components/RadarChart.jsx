import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function RadarChart({values, title}){
    const data = {
        labels: ['Coding', 'Communication', 'Problem Solving', 'Teamwork', 'Creativity'], // Categories
        datasets: [
          {
            label: 'Skill Level',
            data: values, // Data points for each category
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Transparent fill
            borderColor: 'rgba(54, 162, 235, 1)', // Line color
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Points color
            pointBorderColor: '#fff', // Points border color
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          },
        ],
      };
    
      const options = {
        responsive: true,
        scale: {
          ticks: {
            beginAtZero: true,
            max: 100, // Set maximum value for the axis
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
              },
            },
          },
        },
      };

      return <div className="max-h-96 ">
      <div className="flex-cols">
     
 <div className="w-80 h-80 bg-white shadow-lg   p-8"> 
 <h2 className="text-lg text-center font-bold ml-0">{title}</h2>
   <Radar data={data} options={options} />
 </div>
     
      </div>
</div>
}