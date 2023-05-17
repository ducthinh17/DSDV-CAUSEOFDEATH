import React, { useRef } from "react";

import SunburstChart from "sunburst-chart";
import fromKapsule from "react-kapsule";

const ReactSunburst = fromKapsule(SunburstChart, {
  methodNames: ["focusOnNode"]
});

export default function Chart({ data }) {
  let chartRef = useRef();

  return (
    <ReactSunburst
      ref={chartRef}
      width={500}
      height={500}
      excludeRoot
      label="name"
      size="size"
      color={"color"}
      centerRadius={0.3}
      radiusScaleExponent={0.7}
      tooltipContent={(d, node) => `${node.value} products`}
      data={data}
      onClick={(node) => {
        // myChart.focusOnNode(node);
        // console.log(chartRef);
        chartRef.current.focusOnNode(node);
        console.log("clicked");
        // return false;
      }}
    />
  );
}
