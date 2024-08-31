import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DrawerListItems } from './types';
import { Collapse } from '@mui/material';
import { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';

interface Props {
    listItems: DrawerListItems[];
}

export default function DrawerList({ listItems }: Props): ReactElement {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    const handleClick = (index: number) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <List data-testid="drawer-list">
            {listItems.map((item, index) => (
                <Box key={index}>
                    <ListItem
                        key={index}
                        disablePadding
                        onClick={() => handleClick(index)}
                    >
                        <ListItemButton onClick={item.clickHandler}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    {item.subMenu && (
                        <Collapse
                            in={openItems[index]}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List data-testid="drawer-list-sub-menu">
                                {item.subMenu!.map((subItem, subIndex) => (
                                    <ListItem key={subIndex} disablePadding>
                                        <ListItemButton
                                            onClick={subItem.clickHandler}
                                            sx={{ pl: 4 }}
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
