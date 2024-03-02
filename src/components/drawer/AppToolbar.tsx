import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';
import { DrawerAppBar } from 'src/components/drawer/styles';
import { fontSize } from 'src/shared/fonts';

interface Props {
    open: boolean;
    headerIcon?: ReactNode;
    drawerTitle: ReactNode;
    appClickHandler: () => void;
}

export default function AppToolbar({
    open,
    headerIcon,
    drawerTitle,
    appClickHandler,
}: Props): JSX.Element {
    return (
        <DrawerAppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={appClickHandler}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    {headerIcon}
                    <Box sx={{ ml: 2, fontSize: fontSize.font20 }}>
                        {drawerTitle}
                    </Box>
                </IconButton>
            </Toolbar>
        </DrawerAppBar>
    );
}
