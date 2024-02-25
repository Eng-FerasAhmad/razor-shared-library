import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import DrawerList from './DrawerList';
import { DrawerHeader, MainDrawer, drawerWidth } from './styles';
import { DrawerListItems } from './types';
import AppToolbar from 'src/components/drawer/AppToolbar';

interface Props {
    headerTitle: string;
    listItems: DrawerListItems[];
}

export default function PersistentDrawerLeft({
    headerTitle,
    listItems,
}: Props): JSX.Element {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = (): void => {
        setOpen(true);
    };

    const handleDrawerClose = (): void => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppToolbar
                headerTitle={headerTitle}
                open={open}
                appClickHandler={handleDrawerOpen}
            />

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerList listItems={listItems} />
            </Drawer>

            <MainDrawer open={open}>
                <DrawerHeader />
            </MainDrawer>
        </Box>
    );
}
