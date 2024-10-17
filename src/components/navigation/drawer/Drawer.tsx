import { ReactElement, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Menu from '@mui/icons-material/Menu';

import { Template } from 'components/_template/Template';
import { pixelToRem } from 'shared/common';

import DrawerList from './DrawerList';
import DrawerToolbar from './DrawerToolbar';
import { drawerWidth } from './styles';
import { DrawerListItems } from './types';

interface Props {
    appTitle: string;
    header: ReactNode;
    closeDrawerIcon?: ReactNode;
    drawerTitle?: ReactNode;
    listItems: DrawerListItems[];
    open: boolean;
    handleDrawerOpen: () => void;
    handleSubItemClick: (index: number) => void;
    selectedSubItemIndex?: number;
    selectedItemIndex?: number;
}

export function DrawerCustom({
    appTitle,
    header,
    listItems,
    open,
    handleDrawerOpen,
    handleSubItemClick,
    selectedSubItemIndex,
    selectedItemIndex,
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
                    headerIcon={<Menu />}
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
                        collapseIconOpen={<ExpandMore color={'secondary'} />}
                        collapseIconClose={<ChevronRight color={'secondary'} />}
                        data-testid="drawer-list"
                        handleClick={handleSubItemClick}
                        selectedSubItemIndex={selectedSubItemIndex}
                        selectedItemIndex={selectedItemIndex}
                    />
                </Drawer>
            </Box>
        </Template>
    );
}
