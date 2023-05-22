// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/scatterplot\
import React from 'react';
// import ReactDOM from 'react-dom';
// import * as V from 'victory';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockScatter as data } from "../data/mockData";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveScatterPlot = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Tooltip = ({ node }) => (
    <div
      style={{
        background: "white",
        padding: "10px",
        border: "1px solid #ccc",
        color: "black",
      }}
    >
      <strong>{node.id}</strong> <br />
    </div>
  );

  return (
    <ResponsiveScatterPlot
      data={data}
      theme={{
        background: "#f0f0f0",
        text: {
          fontSize: 13,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      tooltip={Tooltip}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: "linear", min: 0, max: "auto" }}
      xFormat=">-.2f"
      yScale={{ type: "linear", min: 0, max: "auto" }}
      yFormat=">-.2f"
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "weight",
        legendPosition: "middle",
        legendOffset: 46,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "size",
        legendPosition: "middle",
        legendOffset: -60,
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 130,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default MyResponsiveScatterPlot;
