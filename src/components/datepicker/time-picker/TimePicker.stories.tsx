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
        locale: 'en-GB' as DatepickerLocale,
        value: DateTime.now(),
        onChange: (newValue: DateTime | null) => {
            console.log(newValue?.toISOTime());
        },
    },
};
