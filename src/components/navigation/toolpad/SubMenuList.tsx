import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import { MenuItemType } from './types';
import { submenuItemSx } from './styles';

interface Props {
    menuItems: MenuItemType[];
    selectedKey: string | null;
    selectedColor: string;
    onSelect: (key: string, onClick?: () => void) => void;
}

export default function SubMenuList({
    menuItems,
    selectedKey,
    onSelect,
}: Props) {
    return (
        <List component="div" disablePadding data-testid="list-container">
            {menuItems.map((child) => {
                const isSelected = selectedKey === child.key;
                return (
                    <ListItemButton
                        key={child.key}
                        selected={isSelected}
                        onClick={() => onSelect(child.key, child.onClick)}
                        sx={submenuItemSx(isSelected)}
                    >
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            {child.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: '15px' }}>
                                    {child.label}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                );
            })}
        </List>
    );
}
