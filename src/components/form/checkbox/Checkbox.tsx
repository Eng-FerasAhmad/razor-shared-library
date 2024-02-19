import { Checkbox, CheckboxProps } from '@mui/material';
import { Template } from 'src/components/_template/Template';

interface Props {
    label?: string;
}
export function CheckboxCustom({
    label,
    ...props
}: CheckboxProps & Props): JSX.Element {
    return (
        <Template>
            <Checkbox
                id={`${label}-checkbox`}
                {...props}
                data-testid="checkbox"
            />
            <label htmlFor={`${label}-checkbox`}>{label}</label>
        </Template>
    );
}
