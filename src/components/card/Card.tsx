import { Card, CardProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Template } from 'src/components/_template/Template';

export function CardCustom({
    children,
    ...props
}: PropsWithChildren<CardProps>): JSX.Element {
    return (
        <Template>
            <Card
                data-testid="card"
                {...props}
                sx={{
                    fontFamily: 'inherit',
                    padding: 2,
                }}
            >
                {children}
            </Card>
        </Template>
    );
}
