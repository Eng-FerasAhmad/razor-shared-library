import { ReactElement } from '../../../../node_modules/react';
import { DateTime } from 'luxon';
import { TimePickerProps } from '@mui/x-date-pickers';
import { DatepickerLocale } from '../../../../../../../../src/components/datepicker/date-picker/types';
interface DatepickerProps {
    locale: DatepickerLocale;
    is24Format: boolean;
    time?: string;
}
export declare function TimePickerCustom({ locale, time, is24Format, ...props }: Omit<TimePickerProps<DateTime>, 'value'> & DatepickerProps): ReactElement;
export {};
