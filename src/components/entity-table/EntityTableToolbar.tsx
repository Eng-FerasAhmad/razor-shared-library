import { ReactElement, ReactNode } from 'react';

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { pixelToRem } from 'src/shared/common';

interface Props {
    headerTools: ReactNode;
}

export default function EntityTableToolbar({
    headerTools,
}: Props): ReactElement {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { sm: 2 },
                borderBottom: `${pixelToRem(1)} solid lightGray`,
            }}
            data-testid={'entity-table-toolbar'}
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
