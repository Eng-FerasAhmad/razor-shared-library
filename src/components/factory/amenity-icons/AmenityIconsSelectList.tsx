import { ReactElement, useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

import { Template } from 'components/_template/Template';

import { amenityOptions, AutoCompleteOptions } from './iconList';

interface Props {
    label: string;
    value: string | number;
    onChange: (selectedIconName: string | null) => void;
}

export function AmenityIconsSelectList({
    label,
    value,
    onChange,
}: Props): ReactElement {
    const options: AutoCompleteOptions[] = amenityOptions;
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] =
        useState<AutoCompleteOptions | null>(null);

    useEffect(() => {
        const selectedOption = options.find((option) => option.value === value);
        if (selectedOption) {
            setInputValue(selectedOption.label);
            setSelectedValue(selectedOption);
        } else {
            setInputValue('');
            setSelectedValue(null);
        }
    }, [value, options]);

    const handleInputChange = (_event: unknown, newInputValue: string) => {
        setInputValue(newInputValue);
    };

    const handleChange = (
        _event: unknown,
        selectedOption: AutoCompleteOptions | null
    ) => {
        if (selectedOption) {
            onChange(selectedOption.value);
            setSelectedValue(selectedOption);
        } else {
            onChange(null);
            setSelectedValue(null);
        }
    };

    return (
        <Template>
            <Autocomplete
                data-testid="auto-complete"
                disablePortal={false}
                id="auto-complete"
                options={options}
                sx={{ width: '100%' }}
                value={selectedValue}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                isOptionEqualToValue={(option, val) =>
                    option.value === val?.value
                }
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )}
                renderOption={(props, option) => {
                    return (
                        <Box
                            component="li"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            {...props}
                        >
                            {option.icon({ fontSize: 'small' })}
                            <Typography>{option.label}</Typography>
                        </Box>
                    );
                }}
            />
        </Template>
    );
}
