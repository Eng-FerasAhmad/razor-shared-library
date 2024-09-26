import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ReactElement, ReactNode } from 'react';
import { DrawerAppBar } from 'src/components/drawer/styles';
import { fontSize } from 'src/shared/fonts';

interface Props {
    appTitle: string;
    header: ReactNode;
    open: boolean;
    headerIcon?: ReactNode;
    appClickHandler: () => void;
}

export default function DrawerToolbar({
    appTitle,
    header,
    open,
    headerIcon,
    appClickHandler,
}: Props): ReactElement {
    return (
        <DrawerAppBar
            position="fixed"
            open={open}
            data-testid="drawer-app-bar"
            sx={{
                minHeight: '50px',
                height: '50px',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                data-testid="drawer-toolbar"
                style={{
                    minHeight: '50px',
                    height: '50px',
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={appClickHandler}
                    edge="start"
                    sx={{
                        mr: 2,
                    }}
                >
                    {headerIcon}
                </IconButton>
                <Box
                    data-testid="app-title"
                    sx={{
                        fontSize: fontSize.font18,
                        width: '100%',
                        mr: 2,
                    }}
                >
                    {appTitle}
                </Box>
                {header}
            </Toolbar>
        </DrawerAppBar>
    );
}
