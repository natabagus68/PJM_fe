import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartSemiCircle({ value = 0, color, title, ...props }) {

    const options = {
        responsive: true,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            display : false,
          },
          tooltip : {
            enabled : false
          },
        },
    }
      const data = {
        labels: ['', ''],
        datasets: [
          {
            label: '',
            data: [value, 100-value],
            backgroundColor: [
                color,
                'rgba(0, 0, 0, 0)',
            ],
            borderRadius : 50,
            borderWidth: 0
          },
        ],
      };
    return (
        <>
            <div className='flex justify-center items-center relative w-[70%] h-[70%]'>
                <div className='flex rounded-full border-[#646566] border-[8px] w-[90%] h-[90%] absolute'></div>
                <div className='z-40 w-full'>
                    <Doughnut data={data} options={options}/>
                </div>
                <span className='absolute text-white font-semibold text-5xl'>{value}%</span>
            </div>
            <span className='text-white text-3xl font-semibold'>{title}</span>
        </>
    );
  }
  