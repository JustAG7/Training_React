import React from 'react';
import {  Pie } from '@ant-design/charts';
import Column from './Column'
import Donut from './Donut'
import BasicColumn from './BasicColumn'
import DemoScatter from './Scatter';
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 }
];

const SimplePieChart = () => {
  const config = {
    data: data,
    angleField: 'value',
    colorField: 'year',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{value} \n{percentage}',
    },
  
  };

  return (
      <>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <Pie {...config} />
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
         <Column />
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
         <Donut />
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
         <BasicColumn />
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
         <DemoScatter />
        </div>
      </>
  );
};

export default SimplePieChart;
