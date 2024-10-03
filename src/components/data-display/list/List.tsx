import { ReactElement } from 'react';

import { ListItemProps, ListItemText, ListProps } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import { Template } from 'components/_template/Template';
import { ListItemsType } from 'components/data-display/list/types';

interface Props {
    items: ListItemsType[];
    listProps: ListProps;
    itemsProps: ListItemProps;
}

export function ListCustom({
    items,
    listProps,
    itemsProps,
}: Props): ReactElement {
    return (
        <Template>
            <List {...listProps}>
                {items &&
                    items.map((item) => {
                        return (
                            <ListItem key={item.text} {...itemsProps}>
                                <ListItemButton onClick={item.onClick}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
            </List>
        </Template>
    );
}
