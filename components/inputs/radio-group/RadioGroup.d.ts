import { ReactElement } from '../../../../node_modules/react';
import { RadioGroupProps } from '@mui/material/RadioGroup';
import { RadioItems } from './types';
interface Props extends Omit<RadioGroupProps, 'onChange'> {
    label: string;
    radioItems: RadioItems[];
    value: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
export declare function RadioGroupCustom({ label, radioItems, value, disabled, onChange, ...props }: Props): ReactElement;
export {};
