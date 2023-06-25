import { Stack, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';

interface SliderComponentProps {
    label:string
    min:number
    max:number
    default:number
    value:number
    step:number
    unit:string
    amount:number
    onChange: (event:Event)=> void
}

const SliderComponent = (props: SliderComponentProps) => {
    return (
        <>
        <Stack gap={1}>
           <Typography variant='subtitle2'>{props.label}</Typography>
           <Typography variant='h5'>{`${props.unit} ${props.amount}`}</Typography>
        </Stack>
        <Slider
        size="small"
        defaultValue={props.default}
        min={props.min}
        max={props.max}
        aria-label="Small"
        valueLabelDisplay="auto"
        value={props.value}
        marks
        step={props.step}
        onChange={props.onChange}
      />
      <Stack direction='row' justifyContent={'space-between'}>
        <Typography color='text.secondary' variant='caption'>{`${props.unit} ${props.min}`}</Typography>
        <Typography color='text.secondary' variant='caption'>{`${props.unit} ${props.max}`}</Typography>
      </Stack>
        </>
    )
}

export default SliderComponent;