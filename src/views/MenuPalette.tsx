import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import { useState } from 'react';
import { ButtonCustom } from 'src/components/form/button/Button';
import { MenuCustom } from 'src/components/menu/Menu';

export function MenuPalette(): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState<string>('');

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = (): void => {
        setAnchorEl(null);
    };

    const itemsMenu = [
        {
            title: 'item 11',
            action: () => {
                setSelected('item 11');
                setAnchorEl(null);
            },
            icon: <Logout />,
        },
        {
            title: 'item 22',
            action: () => {
                setSelected('item 22');
                setAnchorEl(null);
            },
            icon: <Login />,
        },
    ];

    return (
        <Box sx={{ margin: 2, width: 200 }}>
            <ButtonCustom
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                label="Dashboard"
                variant="contained"
            />
            <MenuCustom
                items={itemsMenu}
                open={open}
                selected={selected}
                handleClose={handleCloseMenu}
                anchorEl={anchorEl}
            />
        </Box>
    );
}
