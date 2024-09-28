import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactElement, useState } from 'react';
import { AutoCompleteOptions } from 'src/components/auto-complete/types';
import { color } from 'shared/color';

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

    const changeHandler = (
        // eslint-disable-next-line
        _e: any,
        newValue: AutoCompleteOptions | null
    ): void => {
        onChange(newValue);
    };

    return (
        <Autocomplete
            data-testid="auto-complete"
            disablePortal
            color={color.primary.main}
            id="auto-complete"
            value={value}
            options={options}
            sx={{ width: '100%' }}
            onChange={(_e, newInputValue) => changeHandler(_e, newInputValue)}
            inputValue={inputValue}
            onInputChange={(_e, newInputValue) => {
                setInputValue(newInputValue);
            }}
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
