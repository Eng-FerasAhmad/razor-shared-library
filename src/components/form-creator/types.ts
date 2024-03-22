import { Dayjs } from 'dayjs';
import { RadioItems } from '../form/radio-group/types';
import { DatepickerLocale } from 'src/components/datepicker/types';
import { SelectItems } from 'src/components/form/input-select/types';

export interface FormDataSet {
    label: string;
    value: string | boolean | number | Dayjs;
    controller: string;
    selectItems?: SelectItems[];
    radioItems?: RadioItems[];
    required?: boolean;
    disable?: boolean;
    error?: boolean;
    errorLabel?: string;
    locale?: DatepickerLocale;
}
