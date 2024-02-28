import { Box } from '@mui/material';
import { useState } from 'react';
import { DrawerCustom } from 'src/components/drawer/Drawer';
import { DrawerListItems } from 'src/components/drawer/types';

export function DrawerPalette(): JSX.Element {
    const [open, setOpen] = useState(true);

    const listItems: DrawerListItems[] = [
        {
            text: 'Mail',
            icon: <>ico</>,
            clickHandler: () => {
                console.log('Im Mail');
            },
        },
        {
            text: 'Address',
            icon: <>ico</>,
            clickHandler: () => {
                console.log('Im Address');
            },
        },
    ];

    const handleDrawerOpen = (): void => {
        setOpen(!open)
    }

    return (
        <Box>
            <DrawerCustom
                open={open}
                header={<>title</>}
                drawerTitle="Components"
                headerIcon={<>=</>}
                closeDrawerIcon={<>{'<'}</>}
                listItems={listItems}
                handleDrawerOpen={handleDrawerOpen}
            />
        </Box>
    );
}
