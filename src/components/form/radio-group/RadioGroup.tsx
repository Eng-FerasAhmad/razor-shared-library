import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { Template } from 'src/components/_template/Template';
import { RadioItems } from './types';

interface Props {
    label: string;
    radioItems: RadioItems[];
    defaultValue: string;
}
export function RadioGroupCustom({
    label,
    radioItems,
    defaultValue,
    ...props
}: Props & RadioGroupProps): JSX.Element {
    return (
        <Template>
        <FormControl>
            <FormLabel id="radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue={defaultValue}
                name="radio-buttons-group"
                row
                {...props}
            >
                {radioItems.map((item, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}

                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
        </Template>
    );
}
