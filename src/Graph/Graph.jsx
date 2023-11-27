import React, { Component } from 'react'
import { LineChart, LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartContainer, ChartsXAxis } from '@mui/x-charts';
const   Graph =()=> {
    const arabicMonths = [
        'ديسمبر',
        'نوفمبر',
        'أكتوبر',
        'سبتمبر',
        'أغسطس',
        'يوليو',
        'يونيو',
        'مايو',
        'أبريل',
        'مارس',
        'فبراير',
        'يناير',
      ];
    return (
        <div style={{width:'48%',backgroundColor:'#fff',marginBlock:'1%',marginRight:'15%'}}>

        <div className='statHeader'>
          
          <div className='stat'>
            <p className='blackText'>إحصائيات إستخدام القسيمة</p>
            <p className='greyText'>05 يوليو , 2023 - 05 أغسطس , 2023</p>
          </div>
          
          <div className='dropDown'>
            <select className='selectPageschart'  >
              <option>سنويا</option>
              <option>شهريا</option>
            </select>
          </div>
      
        </div>
      
                       
        <ChartContainer    xAxis={[{ scaleType: 'point', data: arabicMonths }]}
            series={[
              {
                type:'line',
                data: [2, 4, 2.5, 3, 3.5, 2,5, 5, 2, 8, 4, 5],
                area:true
              },
            ]}
            width={640}
            height={270}
            disableAxisListener
            sx={{
              '.MuiLineElement-root': {
                stroke: '#8884d8',
                strokeWidth: 2,
              },
              '.MuiMarkElement-root': {
                stroke: '#8884d8',
                scale: '0.1',
                fill: 'transparent',
                strokeWidth: 0.1,
              },
            }}
            >
      
          <LinePlot/>
          <ChartsXAxis/>
        </ChartContainer>
      
      </div>
    )
}
export default Graph