import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DrawerListItems } from './types';
import { Collapse } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { fontSize } from 'shared/fonts';

interface Props {
    listItems: DrawerListItems[];
    collapseIconOpen?: ReactNode;
    collapseIconClose?: ReactNode;
    handleClick: (index: number) => void;
}

export default function DrawerList({
    listItems,
    collapseIconOpen,
    collapseIconClose,
    handleClick,
}: Props): ReactElement {
    return (
        <List data-testid="drawer-list">
            {listItems.map((item, index) => (
                <Box key={index}>
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={item.clickHandler}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListItemIcon
                                style={{
                                    display: 'flex',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                    fontSize: fontSize.font16,
                                }}
                                data-testid="mui-list-item-icon"
                            >
                                {item.icon}
                            </ListItemIcon>
                            {item.subMenu && (
                                <Box
                                    style={{
                                        display: 'flex',
                                        justifyItems: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => handleClick(index)}
                                >
                                    {item.isOpen
                                        ? collapseIconOpen
                                        : collapseIconClose}
                                </Box>
                            )}
                        </ListItemButton>
                    </ListItem>
                    {item.subMenu && (
                        <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                            <List data-testid="drawer-list-sub-menu">
                                {item.subMenu!.map((subItem, subIndex) => (
                                    <ListItem key={subIndex} disablePadding>
                                        <ListItemButton
                                            onClick={subItem.clickHandler}
                                            sx={{
                                                pl: 4,
                                                fontSize: fontSize.font15,
                                            }}
                                        >
                                            <ListItemIcon>
                                                {subItem.icon}
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    )}
                </Box>
            ))}
        </List>
    );
}
