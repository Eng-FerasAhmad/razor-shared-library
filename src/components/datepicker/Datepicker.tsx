import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';

interface DatepickerProps {
    locale: 'de' | 'en-gb';
}

export function DatepickerCustom({
    locale,
    ...props
}: DatePickerProps<Dayjs> & DatepickerProps): JSX.Element {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <DatePicker {...props} data-testid="datepicker" />
        </LocalizationProvider>
    );
}
