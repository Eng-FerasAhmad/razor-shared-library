import { ReactElement } from 'react';
import { DateTime } from 'luxon';

import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatepickerLocale } from 'components/datepicker/date-picker/types';
import { Template } from 'components/_template/Template';

interface DatepickerProps {
    locale: DatepickerLocale;
    is24Format: boolean;
    time?: string;
}

export function TimePickerCustom({
    locale,
    time,
    is24Format,
    ...props
}: Omit<TimePickerProps<DateTime>, 'value'> & DatepickerProps): ReactElement {
    const timeValue = time
        ? DateTime.fromFormat(time, 'HH:mm:ss')
        : DateTime.now();

    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterLuxon}
                adapterLocale={locale}
            >
                <TimePicker
                    {...props}
                    value={timeValue}
                    data-testid="time-picker"
                    ampm={!is24Format}
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '0 16px',
                            width: '150px',
                        },
                        '& .MuiInputBase-input': {
                            padding: '10px 0',
                        },
                    }}
                />
            </LocalizationProvider>
        </Template>
    );
}
