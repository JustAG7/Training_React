import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'him',
      value: 27,
    },
    {
      type: 'me',
      value: 25,
    },
    {
      type: 'you',
      value: 18,
    },
    {
      type: 'there',
      value: 15,
    },
    {
      type: 'she',
      value: 10,
    },
    {
      type: 'her',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;