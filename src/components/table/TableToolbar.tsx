import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';
import { pixelToRem } from 'src/shared/common';

interface Props {
    headerTools: ReactNode;
}

export default function TableToolbar({ headerTools }: Props): JSX.Element {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                borderBottom: `${pixelToRem(1)} solid lightGray`,
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTools"
                component="div"
            >
                {headerTools}
            </Typography>
        </Toolbar>
    );
}
