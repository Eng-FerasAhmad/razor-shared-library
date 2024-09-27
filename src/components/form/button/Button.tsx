import Button, { ButtonProps } from '@mui/material/Button';
import { Template } from 'src/components/_template/Template';
import { ReactElement } from 'react';

interface Props {
    label: string;
}

export function ButtonCustom({
    label,
    ...props
}: ButtonProps & Props): ReactElement {
    return (
        <Template>
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
        </Template>
    );
}
