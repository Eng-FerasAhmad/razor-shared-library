import { useState } from 'react';

import { AutoCompleteOptions } from 'components/auto-complete/types';

import type { Meta, StoryObj } from '@storybook/react';

import { AutoCompleteCustom } from './AutoComplete';

const meta: Meta<typeof AutoCompleteCustom> = {
    title: 'Components/form/AutoComplete',
    tags: ['autodocs'],
    component: AutoCompleteCustom,
    argTypes: {
        options: {
            control: { type: 'object' },
        },
        label: {
            control: { type: 'text' },
        },
        value: {
            control: { type: 'object' },
        },
        onChange: {
            action: 'changed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [autoValue, setAutoValue] = useState<AutoCompleteOptions | null>(
            null
        );

        const handleChangeAutoComplete = (
            newValue: AutoCompleteOptions | null
        ): void => {
            setAutoValue(newValue);
        };

        return (
            <AutoCompleteCustom
                label="Select an option"
                options={args.options}
                value={autoValue}
                onChange={handleChangeAutoComplete}
            />
        );
    },
    args: {
        options: [
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
        ] as AutoCompleteOptions[],
        label: 'Select an option',
    },
};
