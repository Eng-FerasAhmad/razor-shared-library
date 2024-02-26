import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';
import { DrawerAppBar } from 'src/components/drawer/styles';

interface Props {
    header: ReactNode;
    open: boolean;
    headerIcon?: ReactNode;
    appClickHandler: () => void;
}

export default function AppToolbar({
    header,
    open,
    headerIcon,
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
                </IconButton>
                {header}
            </Toolbar>
        </DrawerAppBar>
    );
}
