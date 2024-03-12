import { DatepickerLocale } from 'src/components/datepicker/types';
import { SelectItems } from 'src/components/form/input-select/types';
import { RadioItems } from '../form/radio-group/types';

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
    handleChange?: () => void;
    handleClick?: () => void;
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
