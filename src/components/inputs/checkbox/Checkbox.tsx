import { ReactElement } from 'react';

import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

interface Props {
    label?: string;
}
export function CheckboxCustom({
    label,
    ...props
}: CheckboxProps & Props): ReactElement {
    return (
        <>
            <Checkbox
                id={`${label}-checkbox`}
                {...props}
                data-testid="checkbox"
            />
            <label htmlFor={`${label}-checkbox`}>{label}</label>
        </>
    );
}
