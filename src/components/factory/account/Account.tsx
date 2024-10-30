import { ReactNode, useState, MouseEvent } from 'react';

import { Menu, MenuItem, Button, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VerifiedUser } from '@mui/icons-material';

import { color } from 'shared/color';

type LoginItem = {
    label: string;
    icon: ReactNode;
    onClick: () => void;
};

interface LoginSwitchProps {
    items: LoginItem[];
    title: string;
}

export function Account({ items, title }: LoginSwitchProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'inline-block' }}>
            <Button
                onClick={handleClick}
                sx={{
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: color.primary.main,
                    color: color.light,
                    borderRadius: 10,
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        marginRight: '8px',
                        marginLeft: '8px',
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                    }}
                >
                    <VerifiedUser fontSize={'small'} /> <>{title}</>
                </Typography>
                <ExpandMoreIcon
                    sx={{
                        transition: 'transform 0.3s',
                        transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items.map(({ label, icon, onClick }, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            onClick();
                            handleClose();
                        }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 14,
                        }}
                    >
                        <Box component="span" sx={{ mr: 1, display: 'flex' }}>
                            {icon}
                        </Box>
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
