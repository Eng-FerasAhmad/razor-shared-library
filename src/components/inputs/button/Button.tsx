import { ReactElement } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';

interface Props {
    label: string;
}

export function ButtonCustom({
    label,
    ...props
}: ButtonProps & Props): ReactElement {
    return (
        <Button
            {...props}
            sx={{
                textTransform: 'capitalize',
                fontFamily: 'inherit',
                width: '100%',
            }}
        >
            {label}
        </Button>
    );
}
