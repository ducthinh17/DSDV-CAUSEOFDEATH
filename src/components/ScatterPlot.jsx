import React from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryZoomContainer,
  VictoryTooltip,
  VictoryLabel,
} from "victory";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const MyResponsiveScatterPlot = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const groupColors = {
    Colombia: "tomato",
    Laos: "blue",
    Vietnam: "green",
    Thailand: "#efd510",
    Philippines: "orange",
    Bhutan: "brown",
  };

  const tableData = Object.keys(groupColors).map((group) => ({
    label: group,
    color: groupColors[group],
  }));

  const getScatterData = () => [
    {
      id: "Colombia",
      data: [
        { x: 288, y: 2195, year: "2000" },
        { x: 558, y: 1563, year: "2005" },
        { x: 837, y: 995, year: "2010" },
        { x: 1040, y: 843, year: "2013" },
        { x: 1160, y: 839, year: "2014" },
        { x: 1280, y: 848, year: "2015" },
        { x: 1410, y: 851, year: "2016" },
        { x: 1570, y: 867, year: "2017" },
        { x: 1740, y: 887, year: "2018" },
        { x: 1930, y: 903, year: "2019" },
      ],
    },
    {
      id: "Laos",
      data: [
        { x: 1010, y: 6537, year: "2000" },
        { x: 1390, y: 5409, year: "2005" },
        { x: 1740, y: 5155, year: "2010" },
        { x: 2040, y: 4873, year: "2013" },
        { x: 2140, y: 4485, year: "2014" },
        { x: 2250, y: 4015, year: "2015" },
        { x: 2390, y: 3334, year: "2016" },
        { x: 2540, y: 2771, year: "2017" },
        { x: 2680, y: 2392, year: "2018" },
        { x: 2820, y: 1817, year: "2019" },
      ],
    },
    {
      id: "Vietnam",
      data: [
        { x: 490, y: 4949, year: "2000" },
        { x: 788, y: 4578, year: "2005" },
        { x: 1318, y: 4039, year: "2010" },
        { x: 1515, y: 3829, year: "2013" },
        { x: 1700, y: 2957, year: "2014" },
        { x: 2085, y: 2259, year: "2015" },
        { x: 2300, y: 1570, year: "2016" },
        { x: 2540, y: 1466, year: "2017" },
        { x: 2666, y: 1770, year: "2018" },
        { x: 2716, y: 1466, year: "2019" },
      ],
    },
    {
      id: "Thailand",
      data: [
        { x: 2636, y: 5311, year: "2000" },
        { x: 3719, y: 5054, year: "2005" },
        { x: 4740, y: 5190, year: "2010" },
        { x: 5090, y: 5322, year: "2013" },
        { x: 5482, y: 5478, year: "2014" },
      ],
    },
    {
      id: "Philippines",
      data: [
        { x: 1100, y: 11942, year: "2000" },
        { x: 1600, y: 11632, year: "2005" },
        { x: 2300, y: 10349, year: "2010" },
        { x: 2800, y: 9590, year: "2013" },
        { x: 3000, y: 9456, year: "2014" },
        { x: 3200, y: 9407, year: "2015" },
        { x: 3400, y: 9272, year: "2016" },
        { x: 3700, y: 9078, year: "2017" },
        { x: 4100, y: 8639, year: "2018" },
        { x: 4500, y: 8392, year: "2019" },
      ],
    },
    {
      id: "Bhutan",
      data: [
        { x: 2420, y: 8632, year: "2005" },
        { x: 2727, y: 8149, year: "2010" },
        { x: 2830, y: 7412, year: "2013" },
        { x: 2910, y: 7056, year: "2014" },
        { x: 3100, y: 6600, year: "2015" },
        { x: 3200, y: 6572, year: "2016" },
        { x: 3400, y: 6500, year: "2017" },
        { x: 3600, y: 6339, year: "2018" },
        { x: 3800, y: 6292, year: "2019" },
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
        animate={{ duration: 2000, easing: "bounce" }} // Add the animate prop here
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
                fill: groupColors[scatterData.id],
                opacity: 1,
              },
            }}
            size={5}
          />
        ))}

        <VictoryLabel
          text="Exploring the Relationship between Diarrhea and GDP per capita"
          x={250}
          y={10}
          textAnchor="middle"
          style={{
            fill: "grey",
            fontSize: 18,
            fontWeight: "bold",
          }}
        />
        <VictoryLabel
          text="GDP per capita (USD)"
          x={250}
          y={390}
          textAnchor="middle"
          style={{
            fill: "grey",
            fontSize: 14,
            fontWeight: "bold",
          }}
        />
        <VictoryLabel
          text="Diarrheal Diseases (unit)"
          x={-10}
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
            marginTop: "-17%",
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
              <tr key={index} style={{ backgroundColor: "#5F9EA0" }}>
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
