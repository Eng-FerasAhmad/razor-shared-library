import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface Props {
    headerTools: ReactNode;
}

export default function TableToolbar({ headerTools }: Props): JSX.Element {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {headerTools}
            </Typography>
        </Toolbar>
    );
}
