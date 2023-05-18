import "./styles.css";
import { useState } from "react";

import SunburstChart from "./components/SunburstChart";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import deadth from "./data/deadth.json";
import cardiovascular from "./data/cardiovascular.json";
import road_Injuries from "./data/road_Injuries.json";
import hiv from "./data/hiv.json";

export default function App() {
  const [value, setValue] = useState("deadth");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome to My Sunburst Chart </h1>
      <h2>Let's try some magic happen!</h2>
      {console.log(value)}
      <div className="radio">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="deadth"
              control={<Radio color="success" />}
              label="Deadth"
            />
            <FormControlLabel
              value="exch"
              control={<Radio color="success" />}
              label="Cardiovascular"
            />
            <FormControlLabel
              value="exlbg"
              control={<Radio color="success" />}
              label="Road Injuries"
            />
            <FormControlLabel
              value="hiv"
              control={<Radio color="success" />}
              label="HIV/AIDS"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="chart">
        {value === "deadth" ? (
          <SunburstChart data={deadth} />
        ) : value === "exch" ? (
          <SunburstChart data={cardiovascular} />
        ) : value === "exlbg" ? (
          <SunburstChart data={road_Injuries} />
        ) : (
          <SunburstChart data={hiv} />
        )}
      </div>
    </div>
  );
}
