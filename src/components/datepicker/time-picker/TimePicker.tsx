import { ReactElement } from 'react';
import { DateTime } from 'luxon';

import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatepickerLocale } from 'components/datepicker/date-picker/types';
import { Template } from 'components/_template/Template';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function TimePickerCustom({
    locale,
    ...props
}: TimePickerProps<DateTime> & DatepickerProps): ReactElement {
    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterLuxon}
                adapterLocale={locale}
            >
                <TimePicker {...props} data-testid="time-picker" />
            </LocalizationProvider>
        </Template>
    );
}
