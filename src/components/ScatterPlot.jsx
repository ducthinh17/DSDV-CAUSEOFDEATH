import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryTooltip,
  VictoryLabel
} from 'victory';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const MyResponsiveScatterPlot = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getScatterData = () => [
    {
      id: 'East Asia',
      data: [
        { x: 5081.71, y: 26540810 },
        { x: 2240.77, y: 643715 },
      ],
    },
    {
      id: 'South Central Asia',
      data: [
        { x: 1127.45, y: 5982631 },
        { x: 5591.85, y: 783174 },
        { x: 2600.94, y: 2028238 },
        { x: 4977.26, y: 1611980 },
        { x: 4718.45, y: 4526448 },
        { x: 1205.12, y: 1118630 },
        { x: 564.01, y: 38151878 },
        { x: 853.34, y: 1335833 },
        { x: 6515.5, y: 919328 },
        { x: 1632.32, y: 5581614 },
      ],
    },
    {
      id: 'Southeast Asia',
      data: [
        { x: 504.96, y: 24803502 },
        { x: 1521.89, y: 119148 },
        { x: 1213.81, y: 3177198 },
        { x: 1551.58, y: 44046941 },
        { x: 5897.72, y: 3387621 },
        { x: 624.77, y: 13486764 },
        { x: 618.87, y: 5159447 },
        { x: 2102.28, y: 3479255 },
        { x: 3530, y: 11358484 },
      ],
    },
  ];

  const data = getScatterData();

  return (
    <VictoryChart
      theme={{
        background: '#f0f0f0',
        axis: {
          domain: {
            stroke: colors.grey[100],
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            stroke: colors.grey[100],
            size: 5,
            padding: 5,
          },
          tickLabels: {
            fill: colors.grey[100],
            fontSize: 13,
          },
        },
        scatter: {
          data: {
            fill: ({ datum }) => (datum.y % 5 === 0 ? 'tomato' : 'black'),
            opacity: ({ datum }) => (datum.y % 5 === 0 ? 1 : 0.7),
          },
        },
      }}
      width={500}
      height={400}
    >
      {data.map((scatterData, index) => (
        <VictoryScatter
          key={index}
          data={scatterData.data}
          x="x"
          y="y"
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: index === 0 ? 'tomato' : index === 1 ? 'blue' : 'green',
              opacity: 1,
            },
          }}
          size={5}
        />
      ))}

      <VictoryLabel
        text="Scatter Plot"
        x={250}
        y={30}
        textAnchor="middle"
        style={{
          fill: colors.grey[100],
          fontSize: 20,
          fontWeight: 'bold',
        }}
      />
      <VictoryLabel
        text="X Axis Label"
        x={250}
        y={380}
        textAnchor="middle"
        style={{
          fill: colors.grey[100],
          fontSize: 14,
          fontWeight: 'bold',
        }}
      />
      <VictoryLabel
        text="Y Axis Label"
        x={20}
        y={200}
        textAnchor="middle"
        angle={-90}
        style={{
          fill: colors.grey[100],
          fontSize: 14,
          fontWeight: 'bold',
        }}
      />
      <VictoryZoomContainer zoomDomain={{ x: [0, 7.000], y: [0, 45.000] }} />
    </VictoryChart>
  );
};

export default MyResponsiveScatterPlot;
