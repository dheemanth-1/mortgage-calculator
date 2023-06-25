import { useState } from 'react'
import { Container, Grid } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

export interface IData {
  homeValue:number
  downPayment:number
  loanAmount:number
  interestRate:number
}


function App() {
  const [data, setData] = useState({
    homeValue:3000,
    downPayment:2000,
    loanAmount:3000,
    interestRate:5
  })

  return (
    <div>
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
