import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DrawerListItems } from './types';

interface Props {
    listItems: DrawerListItems[];
}

export default function DrawerList({ listItems }: Props): JSX.Element {
    return (
        <List data-testid="drawer-list">
            {listItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={item.clickHandler}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
