import { Meta, StoryObj } from '@storybook/react';

import { Inbox, Mail } from '@mui/icons-material';
import { ListProps, ListItemProps } from '@mui/material';

import { ListItemsType } from 'components/data-display/list/types';
import { ListCustom } from 'components/data-display/list/List';

const meta: Meta<typeof ListCustom> = {
    title: 'Data Display/List',
    component: ListCustom,
    tags: ['autodocs'],
    argTypes: {
        listProps: {
            control: { type: 'object' },
        },
        itemsProps: {
            control: { type: 'object' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ListCustom>;

export const Default: Story = {
    args: {
        listProps: {
            dense: false,
        } as ListProps,
        itemsProps: {
            disablePadding: false,
        } as ListItemProps,
        items: [
            {
                text: 'Inbox',
                icon: <Inbox />,
                onClick: () => alert('Inbox clicked'),
            },
            {
                text: 'Mail',
                icon: <Mail />,
                onClick: () => alert('Mail clicked'),
            },
        ] as ListItemsType[],
    },
};
