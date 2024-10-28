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
    onChange: (selectedIconName: string) => void;
}

export function AmenityIcons({ label, value, onChange }: Props): ReactElement {
    const options: AutoCompleteOptions[] = amenityOptions;
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const selectedOption = options.find((option) => option.value === value);
        if (selectedOption) {
            setInputValue(selectedOption.label);
        } else {
            setInputValue('');
        }
    }, [value, options]);

    return (
        <Template>
            <Autocomplete
                data-testid="auto-complete"
                disablePortal
                id="auto-complete"
                options={options}
                sx={{ width: '100%' }}
                value={options.find((option) => option.value === value)}
                onChange={(_event, selected) =>
                    onChange(selected!.value as string)
                }
                inputValue={inputValue}
                onInputChange={(_e, newInputValue) =>
                    setInputValue(newInputValue)
                }
                isOptionEqualToValue={(option, val) =>
                    option.value === val.value
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
