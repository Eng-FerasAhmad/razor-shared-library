import { ReactElement } from 'react';

import Backdrop, { BackdropProps } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function Loading({ ...props }: BackdropProps): ReactElement {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            {...props}
            data-testid={'progressbar'}
        >
            <CircularProgress color="inherit" role={'progressbar'} />
        </Backdrop>
    );
}
