import { ReactElement } from '../../../../node_modules/react';
import { SelectChangeEvent } from '@mui/material/Select';
import { SelectItems } from '../../../../../../../../src/components/inputs/input-select/types';
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
export declare function InputSelect({ value, items, label, noneValue, helperText, error, disabled, handleChange, }: Props): ReactElement;
export {};
