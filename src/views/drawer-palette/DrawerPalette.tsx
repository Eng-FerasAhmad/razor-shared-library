import { ReactElement, useState } from 'react';

import { Box } from '@mui/material';

import { DrawerCustom } from 'components/navigation/drawer/Drawer';
import { DrawerListItems } from 'components/navigation/drawer/types';

export function DrawerPalette(): ReactElement {
    const [open, setOpen] = useState(true);
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    const handleClick = (index: number) => {
        console.log('index', index);
        setOpenItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const subListItems1: DrawerListItems[] = [
        {
            icon: <>Sub Item 1.1</>,
            clickHandler: () => {
                console.log('Im sub Mail 1.1');
            },
        },
        {
            icon: <>Sub Item 1.2</>,
            clickHandler: () => {
                console.log('Im sub Mail 1.2');
            },
        },
    ];
    const subListItems2: DrawerListItems[] = [
        {
            icon: <>Sub Item 2.1</>,
            clickHandler: () => {
                console.log('Im sub address 2.1');
            },
        },
        {
            icon: <>Sub Item 2.2</>,
            clickHandler: () => {
                console.log('Im sub address 2.2');
            },
        },
    ];

    const listItems: DrawerListItems[] = [
        {
            icon: <>Item 1</>,
            clickHandler: () => {
                console.log('Im Mail');
            },
            subMenu: subListItems1,
            isOpen: openItems[0],
        },
        {
            icon: <>Item 2</>,
            clickHandler: () => {
                console.log('Im Address');
            },
            subMenu: subListItems2,
            isOpen: openItems[1],
        },
        {
            icon: <>Item 3</>,
            clickHandler: () => {
                console.log('Im Item 3');
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
                listItems={listItems}
                handleDrawerOpen={handleDrawerOpen}
                handleSubItemClick={handleClick}
            />
            <>value</>
        </Box>
    );
}
