import { Box } from '@mui/material';
import { DrawerCustom } from 'src/components/drawer/Drawer';
import { DrawerListItems } from 'src/components/drawer/types';

export function DrawerPalette(): JSX.Element {
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
    return (
        <Box>
            <DrawerCustom
                header={<>title</>}
                drawerTitle="Components"
                headerIcon={<>=</>}
                closeDrawerIcon={<>{'<'}</>}
                listItems={listItems}
            />
        </Box>
    );
}
