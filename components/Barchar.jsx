import React, { useEffect , useState } from 'react'

import { Bar } from 'react-chartjs-2';
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



const Barchar = () => {
    const [chartData , setCharData] = useState({
        datasets : [],

    });

    const [charOptions , setChartOptions] = useState({});


    useEffect(()=>{
       
               
        setCharData({
            labels : ['card_limit' , 'card_interest_rate'],
            datasets: [
                {
                    label : '$',
                    data: [78780,100659,7434],
                    borderColor:'rgb(53,162, 235)',
                    backgroundColor: 'rgb(53 , 162 , 235 , 0.4)'
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
       <div className='bg-white lg:h-[70vh] h-[50vh] p-4 m-auto border rounded-lg w-full mb-7' >
         <Bar data={chartData} options={charOptions}/>
       </div>
         
    </>

    
  )
}

export default Barchar
