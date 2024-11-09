import { ReactElement, ReactNode } from 'react';

import Drawer from '@mui/material/Drawer';

interface Props {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    children: ReactNode;
}

export function Sidebar({
    isDrawerOpen,
    toggleDrawer,
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
                    top: '65px',
                    height: 'calc(100vh - 64px)',
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
