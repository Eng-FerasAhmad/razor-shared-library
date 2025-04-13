import { ReactElement } from 'react';
import { DateTime } from 'luxon';

import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Template } from 'components/_template/Template';
import { DatepickerLocale } from 'components/datepicker/date-picker/types';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function DatepickerCustom({
    locale,
    ...props
}: DatePickerProps<DateTime> & DatepickerProps): ReactElement {
    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterLuxon}
                adapterLocale={locale}
                data-testid="datepicker"
            >
                <DatePicker {...props} />
            </LocalizationProvider>
        </Template>
    );
}
