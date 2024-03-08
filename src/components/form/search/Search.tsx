import IconButton from '@mui/material/IconButton';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface Props {
    icon: ReactNode;
}

export function SearchCustom({
    icon,
    ...props
}: Props & InputBaseProps): JSX.Element {
    return (
        <Paper
            variant="outlined"
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                {...props}
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                {icon}
            </IconButton>
        </Paper>
    );
}
