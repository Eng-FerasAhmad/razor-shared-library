import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import { DrawerAppBar } from 'src/components/drawer/styles';

interface Props {
    headerTitle: string;
    open: boolean;
    headerIcon?: ReactNode;
    appClickHandler: () => void;
}

export default function AppToolbar({
    headerTitle,
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
                <Typography variant="h6" noWrap component="div">
                    {headerTitle}
                </Typography>
            </Toolbar>
        </DrawerAppBar>
    );
}
