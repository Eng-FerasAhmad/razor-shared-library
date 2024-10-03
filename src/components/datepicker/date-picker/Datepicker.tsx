import { ReactElement } from 'react';
import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import { Template } from 'components/_template/Template';
import { DatepickerLocale } from 'components/datepicker/date-picker/types';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function DatepickerCustom({
    locale,
    ...props
}: DatePickerProps<Dayjs> & DatepickerProps): ReactElement {
    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={locale}
                data-testid="datepicker"
            >
                <DatePicker {...props} />
            </LocalizationProvider>
        </Template>
    );
}
