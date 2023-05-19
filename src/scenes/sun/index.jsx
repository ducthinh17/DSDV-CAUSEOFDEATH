import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sunburst from "../../components/Sunburst";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Sunburst Chart" subtitle="Simple Sunburst Chart" />
      <Box height="75vh">
        <Sunburst />
      </Box>
    </Box>
  );
};

export default Pie;
