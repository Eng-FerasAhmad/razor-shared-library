import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import { Template } from 'src/components/_template/Template';
import { DatepickerLocale } from 'src/components/datepicker/types';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function DatepickerCustom({
    locale,
    ...props
}: DatePickerProps<Dayjs> & DatepickerProps): JSX.Element {
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
