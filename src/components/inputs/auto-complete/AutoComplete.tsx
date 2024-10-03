import { ReactElement, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { AutoCompleteOptions } from 'components/inputs/auto-complete/types';

interface Props {
    options: AutoCompleteOptions[];
    label: string;
    value: AutoCompleteOptions | null;
    onChange: (selected: AutoCompleteOptions | null) => void;
}

export function AutoCompleteCustom({
    options,
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
        <Autocomplete
            data-testid="auto-complete"
            disablePortal
            id="auto-complete"
            options={options}
            sx={{ width: '100%' }}
            value={value}
            onChange={() => onChange}
            inputValue={inputValue}
            onInputChange={(_e, newInputValue) => setInputValue(newInputValue)}
            isOptionEqualToValue={(option, val) => option.value === val.value}
            renderInput={(params) => <TextField {...params} label={label} />}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                >
                    {option.icon}
                    <Typography sx={{ ml: 2 }}>{option.label}</Typography>
                </Box>
            )}
        />
    );
}
