import { ReactElement } from '../../../../node_modules/react';
import { SelectChangeEvent } from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material/styles';
import { SelectItems } from '../../../../../../../../src/components/inputs/input-select/types';
interface Props {
    items: SelectItems[];
    value: string;
    label?: string;
    noneValue?: boolean;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium';
    handleChange: (event: SelectChangeEvent) => void;
    formControlSx?: SxProps<Theme>;
    selectSx?: SxProps<Theme>;
}
export declare function InputSelect({ value, items, label, noneValue, helperText, error, disabled, handleChange, size, formControlSx, selectSx, }: Props): ReactElement;
export {};
