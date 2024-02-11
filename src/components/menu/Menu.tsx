import { Box, Menu, MenuItem, MenuProps } from '@mui/material';
import { ReactNode } from 'react';
import { Template } from 'src/components/_template/Template';

interface Items {
    title: string;
    action: () => void;
    icon?: ReactNode;
}

interface Props {
    items: Array<Items>;
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    selected?: string;
}

export const MenuCustom = ({
    items,
    anchorEl,
    handleClose,
    selected,
    ...props
}: MenuProps & Props): JSX.Element => {
    return (
        <Template>
            <Menu
                id="demo-positioned-menu"
                data-testid="menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                onClose={handleClose}
                {...props}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {items.map((item, idx) => {
                    return (
                        <MenuItem
                            key={idx}
                            selected={selected === item.title}
                            onClick={item.action}
                        >
                            <Box sx={{ mr: 1 }}>{item.icon}</Box> {item.title}
                        </MenuItem>
                    );
                })}
            </Menu>
        </Template>
    );
};
