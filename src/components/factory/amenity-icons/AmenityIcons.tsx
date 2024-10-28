import { ReactElement, useState, useEffect, ReactNode } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

import { amenityOptions } from 'components/factory/amenity-icons/iconList';
import { Template } from 'components/_template/Template';

interface AutoCompleteOptions {
    value: string | number;
    label: string;
    icon?: ReactNode;
}

interface Props {
    label: string;
    value: string | number;
    onChange: (selectedIconName: string | null) => void;
}

export function AmenityIcons({ label, value, onChange }: Props): ReactElement {
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
            onChange(selectedOption.value as string);
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
                    // eslint-disable-next-line
                    const { key, ...otherProps } = props;
                    return (
                        <Box
                            key={option.value}
                            component="li"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            {...otherProps}
                        >
                            {option.icon}
                            <Typography>{option.label}</Typography>
                        </Box>
                    );
                }}
            />
        </Template>
    );
}
