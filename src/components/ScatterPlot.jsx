import React from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryZoomContainer,
  // VictoryAxis,
  VictoryTooltip,
  VictoryLabel,
} from "victory";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const MyResponsiveScatterPlot = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const groupColors = {
    Afghanistan: "tomato",
    Thailand: "blue",
    Vietnam: "green",
  };

  const tableData = Object.keys(groupColors).map((group) => ({
    label: group,
    color: groupColors[group],
  }));

  const getScatterData = () => [
    {
      id: "Afghanistan",
      data: [
        { x: 4235, y: 2159, year: "2000" },
        { x: 4927, y: 2218, year: "2013" },
        { x: 6123, y: 2475, year: "2014" },
        { x: 8174, y: 2812, year: "2015" },
        { x: 8215, y: 3027, year: "2016" },
        { x: 9566, y: 3102, year: "2017" },
        { x: 9682, y: 3193, year: "2018" },
        { x: 10656, y: 3304, year: "2019" },
      ],
    },
    {
      id: "Thailand",
      data: [
        { x: 7345, y: 1359, year: "2000" },
        { x: 6899, y: 1324, year: "2013" },
        { x: 6484, y: 1300, year: "2014" },
        { x: 6194, y: 1296, year: "2015" },
        { x: 5997, y: 1320, year: "2016" },
        { x: 5742, y: 1342, year: "2017" },
        { x: 5477, y: 1359, year: "2018" },
        { x: 5185, y: 1249, year: "2019" },
      ],
    },
    {
      id: "Vietnam",
      data: [
        { x: 7933, y: 2049, year: "2000" },
        { x: 7561, y: 2078, year: "2013" },
        { x: 7264, y: 1939, year: "2014" },
        { x: 6753, y: 1829, year: "2015" },
        { x: 6339, y: 1757, year: "2016" },
        { x: 5882, y: 1659, year: "2017" },
        { x: 5379, y: 1570, year: "2018" },
        { x: 4978, y: 1466, year: "2019" },
      ],
    },
  ];

  const data = getScatterData();

  return (
    <div style={{ height: "700px" }}>
      <VictoryChart
        theme={{
          background: "#f0f0f0",
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
              fill: ({ datum }) => (datum.y % 5 === 0 ? "tomato" : "black"),
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
            labels={({ datum }) => `${datum.year} (${datum.x}, ${datum.y})`}
            labelComponent={<VictoryTooltip />}
            style={{
              data: {
                fill: index === 0 ? "tomato" : index === 1 ? "blue" : "green",
                opacity: 1,
              },
            }}
            size={5}
          />
        ))}

        <VictoryLabel
          text="Exploring the Relationship between Meningitis and Diarrhea"
          x={250}
          y={10}
          textAnchor="middle"
          style={{
            fill: "brown",
            fontSize: 18,
            fontWeight: "bold",
          }}
        />
        <VictoryLabel
          text="Diarrheal Diseases (unit)"
          x={250}
          y={380}
          textAnchor="middle"
          style={{
            fill: "grey",
            fontSize: 14,
            fontWeight: "bold",
          }}
        />
        <VictoryLabel
          text="Meningitis (unit)"
          x={5}
          y={200}
          textAnchor="middle"
          angle={-90}
          style={{
            fill: "grey",
            fontSize: 14,
            fontWeight: "bold",
          }}
        />

        <VictoryZoomContainer zoomDomain={{ x: [0, 7.0], y: [0, 45.0] }} />
      </VictoryChart>

      <div>
        <table
          style={{
            backgroundColor: "darkslategray",
            marginLeft: "80%",
            marginTop: "-10%",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#808080" }}>
              <th>Label</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              
              <tr key={index} style={{ backgroundColor: "#5F9EA0" }} >
                <td>{row.label}</td>
                <td style={{ backgroundColor: row.color }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyResponsiveScatterPlot;
