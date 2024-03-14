import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { RadioItems } from './types';
import { Template } from 'src/components/_template/Template';

interface Props {
    label: string;
    radioItems: RadioItems[];
    value: string;
    disabled: boolean;
}
export function RadioGroupCustom({
    label,
    radioItems,
    value,
    disabled,
    ...props
}: Props & RadioGroupProps): JSX.Element {
    return (
        <Template>
            <FormControl>
                <FormLabel id="radio-buttons-group-label">{label}</FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    value={value}
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
                                disabled={disabled}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Template>
    );
}
