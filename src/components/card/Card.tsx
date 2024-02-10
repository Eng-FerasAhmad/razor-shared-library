import { Card, CardProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export function CardCustom({
    children,
    ...props
}: PropsWithChildren<CardProps>): JSX.Element {
    return (
        <Card
            data-testid="card"
            {...props}
            sx={{
                fontFamily: 'inherit',
                padding: 2,
                boxShadow:
                    '0px 2px 20px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            }}
        >
            {children}
        </Card>
    );
}
