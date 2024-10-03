import { CancelIcon, SearchIcon } from 'src/index';

import type { Meta, StoryObj } from '@storybook/react';

import { SearchCustom } from './Search';

const meta: Meta<typeof SearchCustom> = {
    title: 'Inputs/Search',
    tags: ['autodocs'],
    component: SearchCustom,
    argTypes: {
        searchIcon: {
            control: { type: 'object' },
            description: 'Custom icon to be displayed as the search icon.',
        },
        clearIcon: {
            control: { type: 'object' },
            description: 'Custom icon to be displayed as the clear icon.',
        },
        submitHandler: {
            action: 'submit',
            description: 'Handler for the submit action.',
        },
        clearHandler: {
            action: 'clear',
            description: 'Handler for the clear action.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        searchIcon: <SearchIcon />,
        clearIcon: <CancelIcon />,
        submitHandler: () => console.log('Submit clicked'),
        clearHandler: () => console.log('Clear clicked'),
    },
};
