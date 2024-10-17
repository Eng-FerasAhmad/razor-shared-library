import { ReactElement, ReactNode } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

import { fontSize } from 'shared/fonts';

import { DrawerListItems } from './types';

interface Props {
    listItems: DrawerListItems[];
    collapseIconOpen?: ReactNode;
    collapseIconClose?: ReactNode;
    handleClick: (index: number) => void;
    selectedSubItemIndex?: number;
    selectedItemIndex?: number;
}

export default function DrawerList({
    listItems,
    collapseIconOpen,
    collapseIconClose,
    handleClick,
    selectedSubItemIndex,
    selectedItemIndex,
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
                                                backgroundColor:
                                                    selectedItemIndex ===
                                                        index &&
                                                    selectedSubItemIndex ===
                                                        subIndex
                                                        ? '#e0e0e0'
                                                        : 'inherit',
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
