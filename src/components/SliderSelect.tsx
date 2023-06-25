import { Stack } from "@mui/material";
import SliderComponent from "../common/SliderComponent";
import { IData } from "../App";

interface SliderSelectProps {
    data:IData
    setData:React.Dispatch<React.SetStateAction<IData>>
}

const SliderSelect = (props:SliderSelectProps) => {
    console.log(props.data)
    const bankLimit = 10_000
  return (
    <Stack my={1.4} direction='column' spacing={1.6}>
      <SliderComponent
        label={"Home Value"}
        min={1000}
        max={bankLimit}
        default={props.data.homeValue}
        value={props.data.homeValue}
        step={100}
        unit='$'
        amount={props.data.homeValue}
        onChange={(event) =>
          props.setData({...props.data, homeValue: +((event.target as HTMLInputElement).value)})
        }
      />
      <SliderComponent
        label={"Down Payment"}
        min={0}
        max={props.data.homeValue}
        default={props.data.downPayment}
        step={100}
        value={props.data.downPayment}
        unit='$'
        amount={props.data.downPayment}
        onChange={(event) =>
            props.setData({...props.data, 
                            loanAmount:(props.data.homeValue-+((event.target as HTMLInputElement).value)), 
                            downPayment: +((event.target as HTMLInputElement).value)})
        }
      />
      <SliderComponent
        label={"Loan Amount"}
        min={0}
        max={props.data.homeValue}
        default={props.data.loanAmount}
        step={100}
        value={props.data.loanAmount}
        unit='$'
        amount={props.data.loanAmount}
        onChange={(event) =>
            props.setData({...props.data,
                           downPayment: (props.data.homeValue -  +((event.target as HTMLInputElement).value)),
                           loanAmount: +((event.target as HTMLInputElement).value)})
        }
      />
      <SliderComponent
        label={"Interest Rate"}
        min={2}
        max={18}
        default={5}
        value={props.data.interestRate}
        step={0.5}
        unit='%'
        amount={props.data.interestRate}
        onChange={(event) =>
            props.setData({...props.data, interestRate: +((event.target as HTMLInputElement).value)})
        }
      />
    </Stack>
  );
};

export default SliderSelect;
