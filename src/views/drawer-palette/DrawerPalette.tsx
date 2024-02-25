import { Box } from '@mui/material';
import PersistentDrawerLeft, {
    DrawerListItems,
} from 'src/components/drawer/Drawer';

export function DrawerPalette(): JSX.Element {
    const listItems: DrawerListItems[] = [
        {
            text: 'Mail',
            icon: 'Mail',
            clickHandler: () => {
                console.log('Im Mail');
            },
        },
        {
            text: 'Address',
            icon: 'add',
            clickHandler: () => {
                console.log('Im Address');
            },
        },
    ];
    return (
        <Box>
            <PersistentDrawerLeft
                headerTitle="Dashboard"
                listItems={listItems}
            />
        </Box>
    );
}
