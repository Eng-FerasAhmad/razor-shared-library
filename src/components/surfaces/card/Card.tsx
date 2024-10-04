import { PropsWithChildren, ReactElement } from 'react';

import Card, { CardProps } from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Template } from 'components/_template/Template';

interface Props extends CardProps {
    width: number;
    height: number;
    actionButtonLabel?: string;
    actionButton?: () => void;
}

export function CardCustom({
    width,
    height,
    actionButton,
    actionButtonLabel,
    children,
    ...props
}: PropsWithChildren<Props>): ReactElement {
    return (
        <Template>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                }}
            >
                <Card
                    data-testid="card"
                    {...props}
                    sx={{
                        fontFamily: 'inherit',
                        padding: 2,
                        width: width,
                        height: height,
                        margin: 'auto',
                        borderRadius: 5,
                    }}
                >
                    {children}
                </Card>
                {actionButtonLabel && (
                    <Button
                        sx={{
                            width: 'fit-content',
                            margin: '15px auto',
                            height: '35px',
                            borderRadius: 5,
                        }}
                        onClick={actionButton}
                        variant={'outlined'}
                    >
                        {actionButtonLabel}
                    </Button>
                )}
            </Box>
        </Template>
    );
}
