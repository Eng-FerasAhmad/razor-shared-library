import type { Meta, StoryObj } from '@storybook/react';

import { DatepickerCustom } from './Datepicker';

const meta = {
    title: 'Components/Datepicker',
    tags: ['autodocs'],
    component: DatepickerCustom,
    argTypes: {
        locale: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof DatepickerCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'de',
    },
};
