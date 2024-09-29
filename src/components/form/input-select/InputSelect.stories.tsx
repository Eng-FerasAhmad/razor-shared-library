import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { SelectItems } from 'components/form/input-select/types';

import type { Meta, StoryObj } from '@storybook/react';

import { InputSelect } from './InputSelect';

const meta: Meta<typeof InputSelect> = {
    title: 'Components/form/Select',
    tags: ['autodocs'],
    component: InputSelect,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        items: {
            control: { type: 'object' },
        },
        value: {
            control: { type: 'text' },
        },
        noneValue: {
            control: { type: 'boolean' },
        },
        helperText: {
            control: { type: 'text' },
        },
        error: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        handleChange: {
            action: 'changed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value);

        const handleChange = (event: SelectChangeEvent) => {
            const newValue = event.target.value;
            setSelectedValue(newValue);
            if (args.handleChange) {
                args.handleChange(event);
            }
        };

        return (
            <InputSelect
                {...args}
                value={selectedValue}
                handleChange={handleChange}
            />
        );
    },
    args: {
        label: 'Select Label',
        items: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
        ] as SelectItems[],
        value: '',
        noneValue: false,
        helperText: '',
        error: false,
        disabled: false,
    },
};
