import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ReactElement, ReactNode, useState } from 'react';
import { IconOptions } from 'src/components/icon-selector/types';

interface Props {
    options: IconOptions[];
    label: string;
    value: IconOptions | null;
    onChange: (selected: IconOptions | null) => void;
}

export function IconSelector({
    options,
    label,
    value,
    onChange,
}: Props): ReactElement {
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (
        // eslint-disable-next-line
        _e: any,
        newValue: IconOptions | null
    ): void => {
        onChange(newValue);
    };

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
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
            renderOption={(props, option) => {
                const hasIcon = option.icon;
                const icon: ReactNode = option.icon && option.icon({});

                return (
                    <Box
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                    >
                        {icon}
                        <Typography sx={{ ml: hasIcon ? 2 : 0 }}>
                            {option.label}
                        </Typography>
                    </Box>
                );
            }}
        />
    );
}
