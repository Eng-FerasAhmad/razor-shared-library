import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { ReactElement, ReactNode } from 'react';
import DrawerList from './DrawerList';
import DrawerToolbar from './DrawerToolbar';
import { drawerWidth } from './styles';
import { DrawerListItems } from './types';
import { Template } from 'src/components/_template/Template';
import { pixelToRem } from 'src/shared/common';

interface Props {
    appTitle: string;
    header: ReactNode;
    headerIcon?: ReactNode;
    closeDrawerIcon?: ReactNode;
    drawerTitle?: ReactNode;
    listItems: DrawerListItems[];
    open: boolean;
    handleDrawerOpen: () => void;
    collapseIconOpen?: ReactNode;
    collapseIconClose?: ReactNode;
    handleSubItemClick: (index: number) => void;
}

export function DrawerCustom({
    appTitle,
    header,
    headerIcon,
    listItems,
    open,
    handleDrawerOpen,
    collapseIconOpen,
    collapseIconClose,
    handleSubItemClick,
}: Props): ReactElement {
    return (
        <Template>
            <Box
                sx={{
                    display: 'flex',
                }}
                data-testid="drawer"
            >
                <DrawerToolbar
                    appTitle={appTitle}
                    open={open}
                    appClickHandler={handleDrawerOpen}
                    headerIcon={headerIcon}
                    header={header}
                />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            top: pixelToRem(50),
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerList
                        listItems={listItems}
                        collapseIconOpen={collapseIconOpen}
                        collapseIconClose={collapseIconClose}
                        data-testid="drawer-list"
                        handleClick={handleSubItemClick}
                    />
                </Drawer>
            </Box>
        </Template>
    );
}
