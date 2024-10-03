import { ReactElement } from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Template } from 'src/components/_template/Template';
import { SelectItems } from 'components/inputs/input-select/types';

interface Props {
    items: SelectItems[];
    value: string;
    label: string;
    noneValue?: boolean;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    handleChange: (event: SelectChangeEvent) => void;
}
export function InputSelect({
    value,
    items,
    label,
    noneValue,
    helperText,
    error,
    disabled,
    handleChange,
}: Props): ReactElement {
    return (
        <Template>
            <FormControl
                sx={{ width: '100%' }}
                size="medium"
                data-testid="input-select-form"
            >
                <InputLabel id="input-select-label">{label}</InputLabel>
                <Select
                    labelId="input-select-label"
                    id="input-select"
                    value={value}
                    label={label}
                    error={error}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                >
                    {noneValue && (
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                    )}
                    {items.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </Template>
    );
}
