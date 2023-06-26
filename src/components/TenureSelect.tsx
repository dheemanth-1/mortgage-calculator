//import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PropsfromApp } from "./SliderSelect";

const TenureSelect = (props:PropsfromApp) => {

  const handleChange = (event: SelectChangeEvent) => {
    props.setData({
      ...props.data,
      loanTerm: +event.target.value
    })
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={`${props.data.loanTerm}`}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>5 Years</MenuItem>
          <MenuItem value={10}>10 Years</MenuItem>
          <MenuItem value={15}>15 Years</MenuItem>
          <MenuItem value={20}>20 Years</MenuItem>
          <MenuItem value={25}>25 Years</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default TenureSelect;
