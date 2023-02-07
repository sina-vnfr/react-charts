import React ,  {  useContext,useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend);


export  default function Circlechart() {
  
  const numberofinput = useContext()
 
  useEffect(() => {
   
    console.log(
      numberofinput
    );
    console.log(
      "55555"
    );
  }, );

  var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' , 'Green' , 'Green' , 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data:numberofinput,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }; 
  


  

  return (
    <>
   
           <Pie data={data} />  
      
    </>
  );
}
