import { useState } from 'react';
import { DateTime } from 'luxon';

import { FormCreator } from 'components/factory/form-creator/FormCreator';
import { FormDataSet } from 'components/factory/form-creator/types';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormCreator> = {
    component: FormCreator,
    title: 'Factory/Form Creator',
    tags: ['autodocs'],
    argTypes: {
        formDataSet: {
            control: { type: 'object' },
            description: 'Form fields configuration and their data',
        },
        onUpdateFrom: {
            action: 'updated',
            description: 'Handler for form updates',
        },
    },
};

export default meta;

type Story = StoryObj<typeof FormCreator>;

const now = DateTime.now();

const dataSet: FormDataSet[] = [
    {
        label: 'color',
        value: '',
        controller: 'TEXT',
        error: false,
        errorLabel: 'none',
        required: true,
        disable: false,
    },
    {
        label: 'color new',
        value: 'false',
        controller: 'TEXT',
        error: false,
        errorLabel: 'none',
        required: true,
        disable: false,
    },
    {
        label: 'rgb',
        value: 123,
        controller: 'NUMBER',
        error: false,
        errorLabel: 'none',
        required: true,
        disable: false,
    },
    {
        label: 'rgb2',
        value: 1234,
        controller: 'NUMBER',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'select',
        value: 'value1',
        controller: 'SELECT',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
        selectItems: [
            { label: 'item1', value: 'value1' },
            { label: 'item2', value: 'value2' },
        ],
    },
    {
        label: 'select2',
        value: 'value3',
        controller: 'SELECT',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
        selectItems: [
            { label: 'item3', value: 'value3' },
            { label: 'item4', value: 'value4' },
        ],
    },
    {
        label: 'checkbox',
        value: true,
        controller: 'CHECKBOX',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'checkbox2',
        value: false,
        controller: 'CHECKBOX',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'switch',
        value: false,
        controller: 'SWITCH',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'switch2',
        value: true,
        controller: 'SWITCH',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'textarea',
        value: 'text area value',
        controller: 'TEXTAREA',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'textarea2',
        value: 'example',
        controller: 'TEXTAREA',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'Radio',
        value: 'radio1',
        controller: 'RADIO',
        radioItems: [
            { label: 'Radio 1', value: 'radio1' },
            { label: 'Radio 2', value: 'radio2' },
        ],
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'Radio2',
        value: 'radio3',
        controller: 'RADIO',
        radioItems: [
            { label: 'Radio 3', value: 'radio3' },
            { label: 'Radio 4', value: 'radio4' },
        ],
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'datepicker',
        value: now,
        locale: 'en-gb',
        controller: 'DATEPICKER',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'datepicker2',
        value: now,
        locale: 'en-gb',
        controller: 'DATEPICKER',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'time picker',
        value: now,
        locale: 'de',
        controller: 'TIMEPICKER',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'time picker2',
        value: now,
        locale: 'de',
        controller: 'TIMEPICKER',
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
];

export const Default: Story = {
    render: (args) => {
        const [formDataSet, setFormDataSet] = useState<FormDataSet[]>(dataSet);

        const handleUpdateFrom = (updatedFormData: FormDataSet[]): void => {
            setFormDataSet(updatedFormData);
            args.onUpdateFrom(updatedFormData);
        };

        return (
            <FormCreator
                formDataSet={formDataSet}
                onUpdateFrom={handleUpdateFrom}
            />
        );
    },
};
