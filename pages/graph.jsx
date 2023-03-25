
import React, { useEffect , useState } from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import {data} from 'data/data'
Chart.register(ArcElement);
import{
    Chart as CharJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
}from 'chart.js'

CharJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

);


const graph = () => {
  const [chartData , setCharData] = useState({
    datasets : [],

});

const [charOptions , setChartOptions] = useState({});




useEffect(()=>{
      
   
    setCharData({
        labels : ['utilization'],
        datasets: [
            {
                label : '%',

                data: [13.17,6.22,8.44,0.73 , 15.47 ,14.57 , 14.53 , 11.69 , 4.80 , 0.15],
                borderColor:['rgb(53,162, 235)', 'rgb(235, 197, 59)' , 'rgb(59, 235, 84)'],
                backgroundColor:['rgb(53,162, 235)', 'rgb(235, 197, 59)' , 'rgb(59, 235, 84)']
            },
        ]

    })

    setChartOptions({
        plugins:{
            legend:{
                 position: "top",
            },
            
            title:{
                display: true,
                text:'monthly_salary vs card_interest_rate'
            }
        },
        maintainAspectRatio : false,
        reponsive: true
        
    })




},[])


  
  
  return (
    <>
    <div className='flex' >
      <div className='bg-white  h-[600px]  border rounded-lg w-[600px]' >
      < Pie  data={chartData} options={charOptions}/>
    </div>

      <div className='bg-white h-[600px]  border rounded-lg w-[600px]' >
        < Doughnut data={chartData} options={charOptions}/>
      </div>

    </div>
  </>
    
      
    
  )
}

export default graph
