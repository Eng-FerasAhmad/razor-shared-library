import { ReactElement } from '../../../../node_modules/react';
import { Dayjs } from 'dayjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { DatepickerLocale } from '../../../../../../../../src/components/datepicker/date-picker/types';
interface DatepickerProps {
    locale: DatepickerLocale;
}
export declare function DatepickerCustom({ locale, ...props }: DatePickerProps<Dayjs> & DatepickerProps): ReactElement;
export {};
