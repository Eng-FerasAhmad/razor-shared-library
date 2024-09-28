import { useState, ReactElement, ChangeEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import { RadioItems } from './types'; // Ensure RadioItems is typed correctly
import { Template } from 'src/components/_template/Template';

interface Props extends Omit<RadioGroupProps, 'onChange'> {
    label: string;
    radioItems: RadioItems[];
    value: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

export function RadioGroupCustom({
    label,
    radioItems,
    value,
    disabled = false,
    onChange,
    ...props
}: Props): ReactElement {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <Template>
            <FormControl component="fieldset">
                <FormLabel component="legend" id="radio-buttons-group-label">
                    {label}
                </FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    value={selectedValue}
                    onChange={handleChange}
                    name="radio-buttons-group"
                    row
                    {...props}
                >
                    {radioItems.map((item) => (
                        <FormControlLabel
                            key={item.value}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                            disabled={disabled}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Template>
    );
}
