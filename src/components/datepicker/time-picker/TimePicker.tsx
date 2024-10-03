import { ReactElement } from 'react';
import { Dayjs } from 'dayjs';

import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatepickerLocale } from 'components/datepicker/date-picker/types';
import { Template } from 'components/_template/Template';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function TimePickerCustom({
    locale,
    ...props
}: TimePickerProps<Dayjs> & DatepickerProps): ReactElement {
    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={locale}
            >
                <TimePicker {...props} data-testid="time-picker" />
            </LocalizationProvider>
        </Template>
    );
}
