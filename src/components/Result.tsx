import { Stack, Typography } from "@mui/material";
import { IData } from "../App";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultProps {
    data: IData
}

const Result = (props:ResultProps) => {
    const {homeValue, downPayment, loanAmount, loanTerm, interestRate} = props.data;

    const totalLoanMonths = loanTerm * 12

    const interestPerMonth = interestRate / 100 / 12

    const MonthlyPayment = 
        (loanAmount * 
        interestPerMonth *
        (1 + interestPerMonth) ** totalLoanMonths) /
        ((1 + interestPerMonth) ** totalLoanMonths - 1);

    const totalInterestGenerated = (MonthlyPayment * totalLoanMonths) - loanAmount
    

    const PieChartData = {
        labels: ['Principle', 'Interest'],
        datasets: [
          {
            label: 'Ratio of Principle and Interest',
            data: [homeValue, totalInterestGenerated],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <Stack gap={3}>
            <Typography textAlign='center' variant="h5">
                Monthly Payment: $ {MonthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction='row' justifyContent={"center"}>
                <div>
                    <Pie data={PieChartData}/>
                </div>
            </Stack>
            <Typography variant="caption">
                Down Payment: ${downPayment}
            </Typography>
        </Stack>
    )
}

export default Result;