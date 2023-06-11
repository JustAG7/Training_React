import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'data1',
      value: 27,
    },
    {
      type: 'data2',
      value: 25,
    },
    {
      type: 'data3',
      value: 18,
    },
    
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    
    statistic: {
        title: {
            
            formatter: () => '',

        },
      content: {
        
        content: '',
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;