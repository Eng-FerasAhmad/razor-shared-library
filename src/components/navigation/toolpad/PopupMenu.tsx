import { MenuItem, Popover, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';

import { popupItemSx, popupListItemTextSx } from './styles';
import { MenuItemType } from './types';

export default function PopupMenu({
    anchorEl,
    open,
    hoverMenuItems,
    selectedKey,
    onSelect,
    onClose,
}: {
    anchorEl: HTMLElement | null;
    open: boolean;
    hoverMenuItems: MenuItemType[];
    selectedKey: string | null;
    onSelect: (key: string, onClick?: () => void) => void;
    onClose: () => void;
}) {
    return (
        <Popover
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            transitionDuration={0}
            slotProps={{ paper: { sx: { mt: 1 } } }}
        >
            {hoverMenuItems.map((child) => {
                const isSelected = selectedKey === child.key;
                return (
                    <MenuItem
                        key={child.key}
                        selected={isSelected}
                        onClick={() => {
                            onSelect(child.key, child.onClick);
                            setTimeout(() => onClose(), 50);
                        }}
                        sx={popupItemSx(isSelected)}
                    >
                        {child.icon}
                        <ListItemText
                            sx={popupListItemTextSx}
                            primary={
                                <Typography sx={{ fontSize: '16px' }}>
                                    {child.label}
                                </Typography>
                            }
                        />
                    </MenuItem>
                );
            })}
        </Popover>
    );
}
