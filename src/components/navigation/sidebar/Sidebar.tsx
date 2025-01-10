import { ReactElement, ReactNode } from 'react';

import Drawer from '@mui/material/Drawer';

interface Props {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    top: number;
    children: ReactNode;
}

export function Sidebar({
    isDrawerOpen,
    toggleDrawer,
    top = 65,
    children,
}: Props): ReactElement {
    return (
        <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 256,
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: `${top}px`,
                    height: `calc(100vh - ${top - 1}px)`,
                    borderRight: '1px solid #e0e0e0',
                    transition: 'transform 0.3s ease-in-out',
                    transform: isDrawerOpen
                        ? 'translateX(0)'
                        : 'translateX(-100%)',
                },
            }}
            ModalProps={{
                keepMounted: true,
                BackdropProps: { invisible: true },
            }}
        >
            {children}
        </Drawer>
    );
}
