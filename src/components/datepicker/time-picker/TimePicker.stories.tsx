import { Dayjs } from 'dayjs';

import { DatepickerLocale } from 'components/datepicker/date-picker/types';
import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimePickerCustom> = {
    component: TimePickerCustom,
    title: 'Datepicker/Time Picker',
    tags: ['autodocs'],
    argTypes: {
        locale: {
            options: ['en-gb', 'de'],
            control: { type: 'select' },
            description: 'Locale for the time picker',
        },
        value: {
            control: { type: 'date' },
            description: 'Selected time value',
        },
        onChange: {
            action: 'onChange',
            description: 'Event handler for changing time',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TimePickerCustom>;

export const Default: Story = {
    args: {
        locale: 'en-gb' as DatepickerLocale,
        value: null,
        onChange: (newValue: Dayjs | null) => {
            console.log(newValue);
        },
    },
};
