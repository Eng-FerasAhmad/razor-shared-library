import { MultipleSelectCheckmarks } from 'components/inputs/checkmarks/CheckMarkes';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MultipleSelectCheckmarks> = {
    title: 'Inputs/Checkmarks',
    component: MultipleSelectCheckmarks,
    tags: ['autodocs'],
    argTypes: {
        labelKey: {
            control: { type: 'text' },
        },
        valueKey: {
            control: { type: 'text' },
        },
        options: {
            control: { type: 'object' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
    { id: '1', name: 'Oliver Hansen' },
    { id: '2', name: 'Van Henry' },
    { id: '3', name: 'April Tucker' },
    { id: '4', name: 'Ralph Hubbard' },
    { id: '5', name: 'Omar Alexander' },
];

export const Default: Story = {
    args: {
        options: options,
        labelKey: 'name',
        valueKey: 'id',
        onChange: (selectedItems) => console.log(selectedItems),
    },
};
