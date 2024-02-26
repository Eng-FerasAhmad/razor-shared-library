import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { ReactNode, useState } from 'react';
import DrawerList from './DrawerList';
import { DrawerHeader, MainDrawer, drawerWidth } from './styles';
import { DrawerListItems } from './types';
import { Template } from 'src/components/_template/Template';
import AppToolbar from 'src/components/drawer/AppToolbar';
import { color } from 'src/shared/color';
import { fontSize } from 'src/shared/fonts';

interface Props {
    header: ReactNode;
    headerIcon?: ReactNode;
    closeDrawerIcon?: ReactNode;
    drawerTitle: string;
    listItems: DrawerListItems[];
}

export function DrawerCustom({
    header,
    headerIcon,
    closeDrawerIcon,
    drawerTitle,
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
        <Template>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppToolbar
                    header={header}
                    open={open}
                    appClickHandler={handleDrawerOpen}
                    headerIcon={headerIcon}
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
                    <DrawerHeader
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: color.primary.main,
                            color: color.light,
                            boxShadow:
                                '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
                        }}
                    >
                        <Box
                            sx={{
                                paddingLeft: 1,
                                fontWeight: 500,
                                fontSize: fontSize.font20,
                            }}
                        >
                            {drawerTitle}
                        </Box>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{ color: color.light }}
                        >
                            {closeDrawerIcon}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <DrawerList listItems={listItems} />
                </Drawer>
                <MainDrawer open={open}>
                    <DrawerHeader />
                </MainDrawer>
            </Box>
        </Template>
    );
}
