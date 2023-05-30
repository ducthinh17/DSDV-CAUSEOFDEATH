import { useState } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { sunBurstSampleData as data } from "../data/data_sun";

const MyResponsiveSunburst = ({ isDashboard = false }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleNodeClick = (node, event) => {
    setSelectedNode(node);
    console.log("Node data:", node);
    console.log("Event:", event);
  };

  return (
    <div style={{ height: "700px" }}>
      <ResponsiveSunburst
        data={data}
        theme={{
          // added
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
        onClick={(node, event) => handleNodeClick(node, event)}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={10}
        colors={{ scheme: "accent" }}
        borderWidth={1}
        borderColor={{ theme: "background" }}
        childColor={{
          from: "color",
          modifiers: [["brighter", 0.67]],
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        // animate={true}
        // motionStiffness={90}
        // motionDamping={15}
        // isInteractive={true}
        // arcOpacity={1}
        // arcBorderWidth={1}

        // arcBorderColor={{ from: 'color', modifiers: [['darker', 10.3]] }}
        tooltip={(node) => (
          <div>
            <strong>{node.data.name}</strong>
            <br />
            Value: {node.data.loc}
          </div>
        )}
      />
      {selectedNode && <div>Selected Node: {selectedNode.data.name} | Value: {selectedNode.data.loc} </div>}
      <div>
    
        <table
          style={{
            backgroundColor: "darkslategray",
            marginLeft: "80%",
            marginTop: "-10%",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "green" }}>
              <th>Label</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {data.children.map((node) => (
              <tr key={node.name} style={{ backgroundColor: "#5F9EA0" }}>
                <td>{node.name}</td>
                <td style={{ backgroundColor: node.color }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyResponsiveSunburst;
