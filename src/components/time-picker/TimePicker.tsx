import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { DatepickerLocale } from '../datepicker/types';
import { Template } from 'src/components/_template/Template';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';

interface DatepickerProps {
    locale: DatepickerLocale;
}

export function TimePickerCustom({
    locale,
    ...props
}: TimePickerProps<Dayjs> & DatepickerProps): JSX.Element {
    return (
        <Template>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={locale}
            >
                <TimePicker {...props} />
            </LocalizationProvider>
        </Template>
    );
}
