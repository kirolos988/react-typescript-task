import React from 'react'
import './BarChart.css'
import { Bar } from "react-chartjs-2"

interface props{
  chartData:{
    labels: string[],
    datasets: [
      {
        label: string,
        data: number[],
      },
    ],
  }
}

function BarChart({chartData}:props){
  return( 
    <Bar data={chartData} /> 
  )
}

export default BarChart