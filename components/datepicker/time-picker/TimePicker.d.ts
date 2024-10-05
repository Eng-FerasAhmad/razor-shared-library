import { ReactElement } from '../../../../node_modules/react';
import { Dayjs } from 'dayjs';
import { TimePickerProps } from '@mui/x-date-pickers';
import { DatepickerLocale } from '../../../../../../../../src/components/datepicker/date-picker/types';
interface DatepickerProps {
    locale: DatepickerLocale;
}
export declare function TimePickerCustom({ locale, ...props }: TimePickerProps<Dayjs> & DatepickerProps): ReactElement;
export {};
