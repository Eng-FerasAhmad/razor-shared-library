import { Checkbox, CheckboxProps } from '@mui/material';
import { Template } from 'src/components/_template/Template';
import { ReactElement } from 'react';

interface Props {
    label?: string;
}
export function CheckboxCustom({
    label,
    ...props
}: CheckboxProps & Props): ReactElement {
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
