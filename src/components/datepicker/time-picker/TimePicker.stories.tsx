import { DateTime } from 'luxon';

import { DatepickerLocale } from 'components/datepicker/date-picker/types';
import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimePickerCustom> = {
    component: TimePickerCustom,
    title: 'Datepicker/Time Picker',
    tags: ['autodocs'],
    argTypes: {
        locale: {
            options: ['en-GB', 'de'],
            control: { type: 'select' },
            description: 'Locale for the time picker',
        },
        time: {
            control: { type: 'text' },
            description: 'Initial time in HH:mm:ss format',
        },
        is24Format: {
            control: { type: 'boolean' },
            description: 'Toggle 24-hour format',
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
        locale: 'en-GB' as DatepickerLocale,
        time: DateTime.now().toFormat('HH:mm:ss'),
        is24Format: true,
        onChange: (newValue) => {
            console.log(newValue?.toISOTime());
        },
    },
};
