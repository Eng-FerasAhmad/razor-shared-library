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
    label?: string; // Made optional to handle conditional rendering
    noneValue?: boolean;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium';
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
    size = 'small',
}: Props): ReactElement {
    return (
        <Template>
            <FormControl
                sx={{ width: '100%' }}
                size={size}
                data-testid="input-select-form"
            >
                {label && (
                    <InputLabel id="input-select-label">{label}</InputLabel>
                )}
                <Select
                    labelId={label ? 'input-select-label' : undefined}
                    id="input-select"
                    value={value}
                    label={label || undefined}
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
