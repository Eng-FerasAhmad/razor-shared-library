import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerListItems } from './types';

interface Props {
    listItems: DrawerListItems[];
}

export default function DrawerList({ listItems }: Props): JSX.Element {
    return (
        <List>
            {listItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            onClick={item.clickHandler}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
