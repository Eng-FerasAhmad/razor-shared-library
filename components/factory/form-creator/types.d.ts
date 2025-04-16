import { DateTime } from 'luxon';
import { RadioItems } from '../../../../../../../../src/components/inputs/radio-group/types';
import { DatepickerLocale } from '../../../../../../../../src/components/datepicker/date-picker/types';
import { SelectItems } from '../../../../../../../../src/components/inputs/input-select/types';
export interface FormDataSet {
    label: string;
    value: string | boolean | number | DateTime;
    controller: string;
    selectItems?: SelectItems[];
    radioItems?: RadioItems[];
    required?: boolean;
    disable?: boolean;
    error?: boolean;
    errorLabel?: string;
    locale?: DatepickerLocale;
    is24Format?: boolean;
}
