import "./styles.css";
import { useState } from "react";

import SunburstChart from "./components/SunburstChart";

import {Radio, RadioGroup, FormControl, FormControlLabel} from '@mui/material'

import internal from "./data/internal.json";
import externalChannel from "./data/external_channel.json";
import externalLBG from "./data/external_lbg.json";
import sca from "./data/sca.json";

export default function App() {
  const [value, setValue] = useState("internal");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
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
              value="internal"
              control={<Radio color="success" />}
              label="Internal"
            />
            <FormControlLabel
              value="exch"
              control={<Radio color="success" />}
              label="External Channel"
            />
            <FormControlLabel
              value="exlbg"
              control={<Radio color="success" />}
              label="External LBG"
            />
            <FormControlLabel
              value="sca"
              control={<Radio color="success" />}
              label="SCA"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="chart">
        {value === "internal" ? (
          <SunburstChart data={internal} />
        ) : value === "exch" ? (
          <SunburstChart data={externalChannel} />
        ) : value === "exlbg" ? (
          <SunburstChart data={externalLBG} />
        ) : (
          <SunburstChart data={sca} />
        )}
      </div>
    </div>
  );
}
