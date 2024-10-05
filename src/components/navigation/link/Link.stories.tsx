import { LinkCustom } from 'components/navigation/link/Link';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkCustom> = {
    component: LinkCustom,
    title: 'Navigation/Link',
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: { type: 'text' },
            description: 'The text to display for the link',
        },
    },
};

export default meta;

type Story = StoryObj<typeof LinkCustom>;

export const Default: Story = {
    render: () => <LinkCustom text="Click Here" />,
};
