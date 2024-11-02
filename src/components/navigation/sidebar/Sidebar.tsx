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
                    height: 'calc(100vh - 65px)',
                    borderRight: '1px solid #e0e0e0',
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
