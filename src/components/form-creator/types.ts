import { RadioItems } from '../form/radio-group/types';
import { DatepickerLocale } from 'src/components/datepicker/types';
import { SelectItems } from 'src/components/form/input-select/types';

export interface FormDataSet {
    label: string;
    value: string | boolean | number | Date;
    controller: Controller;
    selectItems?: SelectItems[];
    radioItems?: RadioItems[];
    newCreate?: boolean;
    required?: boolean;
    disable?: boolean;
    error?: boolean;
    errorLabel?: string;
    locale?: DatepickerLocale;
}

export enum Controller {
    TEXT,
    NUMBER,
    SWITCH,
    TEXTAREA,
    BUTTON,
    CHECKBOX,
    SELECT,
    RADIO,
    DATEPICKER,
    TIMEPICKER,
}
