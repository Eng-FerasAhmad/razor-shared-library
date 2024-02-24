import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { Template } from 'src/components/_template/Template';

interface Items {
    value: string;
    label: string;
}

interface Props {
    items: Items[];
    value: string;
    label: string;
    noneValue?: boolean;
    helperText?: string;
    handleChange: (event: SelectChangeEvent) => void;
}
export function InputSelect({
    value,
    items,
    label,
    noneValue,
    helperText,
    handleChange,
}: Props): JSX.Element {
    return (
        <Template>
            <FormControl sx={{ m: 1, width: '100%' }} size="small">
                <InputLabel id="input-select-label">{label}</InputLabel>
                <Select
                    labelId="input-select-label"
                    id="input-select"
                    value={value}
                    label={label}
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
