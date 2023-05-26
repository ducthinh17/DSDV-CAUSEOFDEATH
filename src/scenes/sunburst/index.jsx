import { Box } from "@mui/material";
import Header from "../../components/Header";
import SunburstChart from "../../components/SunburstChart";

const Sunburst = () => {
  return (
    <Box m="20px">
      <Header title="Sunburst Chart" subtitle="Simple Sunburst Chart" />
      <Box height="75vh">
        <SunburstChart />
      </Box>
    </Box>
  );
};

export default Sunburst;
