import { ChangeEvent, useState } from 'react';

import { PaginationCustom } from 'components/navigation/pagination/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PaginationCustom> = {
    component: PaginationCustom,
    title: 'Navigation/Pagination',
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: { type: 'number' },
            description: 'Total number of pages to display',
        },
        onChange: {
            action: 'changed',
            description: 'Function to call when the page changes',
        },
        color: {
            control: { type: 'select', options: ['primary', 'secondary'] },
            description: 'Color of the pagination',
        },
    },
};

export default meta;

type Story = StoryObj<typeof PaginationCustom>;

export const Default: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
            setPage(value);
            console.log(page);
        };

        return (
            <PaginationCustom
                count={10}
                onChange={handleChange}
                color="primary"
            />
        );
    },
};

export const SecondaryColor: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
            setPage(value);
            console.log(page);
        };

        return (
            <PaginationCustom
                count={10}
                onChange={handleChange}
                color="secondary"
            />
        );
    },
};
