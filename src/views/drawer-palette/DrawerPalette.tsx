import { Box } from '@mui/material';
import { useState } from 'react';
import { DrawerCustom } from 'src/components/drawer/Drawer';
import { DrawerListItems } from 'src/components/drawer/types';

export function DrawerPalette(): JSX.Element {
    const [open, setOpen] = useState(true);

    const listItems: DrawerListItems[] = [
        {
            icon: <>Item 1</>,
            clickHandler: () => {
                console.log('Im Mail');
            },
        },
        {
            icon: <>Item 2</>,
            clickHandler: () => {
                console.log('Im Address');
            },
        },
    ];

    const handleDrawerOpen = (): void => {
        setOpen(!open);
    };

    return (
        <Box>
            <DrawerCustom
                appTitle="Razor Admin"
                open={open}
                header={<>title</>}
                drawerTitle={<>Admin Tools</>}
                headerIcon={<>=</>}
                closeDrawerIcon={<>{'<'}</>}
                listItems={listItems}
                handleDrawerOpen={handleDrawerOpen}
            />
            <>value</>
        </Box>
    );
}
