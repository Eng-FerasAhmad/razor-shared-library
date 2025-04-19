import { ReactElement, ReactNode } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    label: string;
    startIcon: ReactNode;
    loading: boolean;
}

export function LoadingButtonCustom({
    label,
    startIcon,
    loading,
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
            startIcon={
                loading ? (
                    <CircularProgress size={18} color={'secondary'} />
                ) : (
                    startIcon
                )
            }
        >
            {label}
        </Button>
    );
}
