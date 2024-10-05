import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import { BreadcrumbsCustom } from 'components/navigation/breadcrumbs/Breadcrumbs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BreadcrumbsCustom> = {
    component: BreadcrumbsCustom,
    title: 'Navigation/Breadcrumbs',
    tags: ['autodocs'],
    argTypes: {
        breadcrumbs: {
            control: { type: 'object' },
            description: 'Array of breadcrumb items as ReactNodes',
        },
    },
};

export default meta;

type Story = StoryObj<typeof BreadcrumbsCustom>;

// Sample breadcrumbs array
const sampleBreadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/category">
        Category
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
        Breadcrumb
    </Typography>,
];

export const Default: Story = {
    render: () => <BreadcrumbsCustom breadcrumbs={sampleBreadcrumbs} />,
};
