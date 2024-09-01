import { Card, CardProps } from '@mui/material';
import { PropsWithChildren, ReactElement } from 'react';
import { Template } from 'src/components/_template/Template';

export function CardCustom({
    children,
    ...props
}: PropsWithChildren<CardProps>): ReactElement {
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
