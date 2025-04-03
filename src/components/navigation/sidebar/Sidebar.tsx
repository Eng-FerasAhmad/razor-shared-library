import { ReactElement, ReactNode } from 'react';

import Drawer from '@mui/material/Drawer';

interface Props {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    top: number;
    children: ReactNode;
    width: number | undefined;
    hasBorder: boolean;
    minView?: boolean;
    minWidth?: number;
}

export function Sidebar({
    isDrawerOpen,
    toggleDrawer,
    top = 65,
    children,
    width = 256,
    hasBorder = true,
    minView = false,
    minWidth = 30,
}: Props): ReactElement {
    const sidebarWidth = isDrawerOpen ? width : minView ? minWidth : 0;

    return (
        <Drawer
            anchor="left"
            open={isDrawerOpen || minView}
            onClose={toggleDrawer}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: sidebarWidth,
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: `${top}px`,
                    height: `calc(100vh - ${top - 1}px)`,
                    borderRight: hasBorder ? '1px solid #e0e0e0' : 'none',
                    transition: 'width 0.3s ease-in-out',
                    overflowX: 'hidden',
                },
            }}
        >
            {children}
        </Drawer>
    );
}
