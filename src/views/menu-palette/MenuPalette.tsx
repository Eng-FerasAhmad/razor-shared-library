import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import { useState } from 'react';
import { ButtonCustom } from 'src/components/form/button/Button';
import { MenuCustom } from 'src/components/menu/Menu';

export function MenuPalette(): JSX.Element {
    const [selected, setSelected] = useState<string>('');

    const itemsMenu = [
        {
            title: 'item 11',
            action: () => {
                setSelected('item 11');
            },
            icon: <Logout />,
        },
        {
            title: 'item 22',
            action: () => {
                setSelected('item 22');
            },
            icon: <Login />,
        },
    ];

    return (
        <Box sx={{ margin: 2, width: 200 }} data-testid="menu-palette">
            <MenuCustom
                items={itemsMenu}
                selected={selected}
                anchor={<ButtonCustom label="Click" variant="contained" />}
            />
        </Box>
    );
}
