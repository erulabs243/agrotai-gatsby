import { ApexOptions } from 'apexcharts';
import React from 'react'
import Chart from 'react-apexcharts';

const lineChartOptions: ApexOptions = {
    xaxis: {
        type: 'datetime',
    },
    stroke: {
        curve: 'straight'
    }
}

const chartSeries = [{
    data: [
        {x: new Date('2023-06-23').getTime(), y: 323}, 
        {x: new Date('2023-06-27').getTime(), y: 543}, 
        {x: new Date('2023-06-29').getTime(), y: 543}, 
        {x: new Date('2023-07-01').getTime(), y: 483}, 
        {x: new Date('2023-07-03').getTime(), y: 565}, 
        {x: new Date('2023-07-04').getTime(), y: 321}
    ]
}];

function LineChart() {
  return (
    <Chart 
        options={lineChartOptions}
        series={chartSeries}
        type='line'
        width={700}
    />
  )
}

export default LineChart