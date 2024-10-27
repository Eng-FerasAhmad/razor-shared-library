import { ReactElement, useState, useEffect, ReactNode } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

import { amenityOptions } from 'components/factory/icon-select-list/iconList';
import { Template } from 'components/_template/Template';

interface AutoCompleteOptions {
    value: string | number;
    label: string;
    icon?: ReactNode;
}

interface Props {
    options: AutoCompleteOptions[];
    label: string;
    value: AutoCompleteOptions | null;
    onChange: (selected: AutoCompleteOptions | null) => void;
}

export function IconSelectList({
    options = amenityOptions,
    label,
    value,
    onChange,
}: Props): ReactElement {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (value) {
            setInputValue(value.label);
        } else {
            setInputValue('');
        }
    }, [value]);

    return (
        <Template>
            <Autocomplete
                data-testid="auto-complete"
                disablePortal
                id="auto-complete"
                options={options}
                sx={{ width: '100%' }}
                value={value}
                onChange={(_event, selected) =>
                    onChange(selected as AutoCompleteOptions | null)
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
                    // eslint-disable-next-line react/prop-types
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
                            {...otherProps} // Spread remaining props without key
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
