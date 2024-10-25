import { Dayjs } from 'dayjs';
import { ChangeEvent, ReactElement } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { InputSelect } from 'components/inputs/input-select/InputSelect';
import { InputText } from 'components/inputs/input-text/InputText';
import { RadioGroupCustom } from 'components/inputs/radio-group/RadioGroup';
import { SwitchCustom } from 'components/inputs/switch/Switch';
import { Textarea } from 'components/inputs/textarea/Textarea';
import { DatepickerCustom } from 'components/datepicker/date-picker/Datepicker';
import { CheckboxCustom } from 'components/inputs/checkbox/Checkbox';
import { FormDataSet } from 'components/factory/form-creator/types';
import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

interface UseFormControllerProps {
    item: FormDataSet;
    index: number;
    updateDataForm: (
        index: number,
        value: string | number | boolean | Dayjs
    ) => void;
    handleInputChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => void;
    submit?: boolean;
}

export function FormInputFactory({
    item,
    index,
    updateDataForm,
    handleInputChange,
    submit,
}: UseFormControllerProps): ReactElement | null {
    switch (item.controller) {
        case 'TEXT':
        case 'NUMBER':
            return (
                <InputText
                    value={item.value}
                    label={item.label}
                    size="medium"
                    onChange={(e) => handleInputChange(e, index)}
                    error={item.required && !item.value && submit}
                    disabled={item.disable}
                    required={item.required}
                />
            );
        case 'SELECT':
            return (
                <InputSelect
                    items={item.selectItems || []}
                    label={item.label}
                    value={item.value as string}
                    handleChange={(e: SelectChangeEvent) =>
                        updateDataForm(index, e.target.value)
                    }
                    error={item.required && !item.value && submit}
                    disabled={item.disable}
                />
            );
        case 'CHECKBOX':
            return (
                <CheckboxCustom
                    checked={item.value as boolean}
                    label={item.label}
                    onChange={(e) => updateDataForm(index, e.target.checked)}
                    disabled={item.disable}
                />
            );
        case 'SWITCH':
            return (
                <SwitchCustom
                    checked={item.value as boolean}
                    label={item.label}
                    onChange={(e) => updateDataForm(index, e.target.checked)}
                    disabled={item.disable}
                />
            );
        case 'TEXTAREA':
            return (
                <Textarea
                    value={item.value}
                    label={item.label}
                    size="medium"
                    onChange={(e) => handleInputChange(e, index)}
                    error={item.required && !item.value && submit}
                    disabled={item.disable}
                    required={item.required}
                />
            );
        case 'RADIO':
            return (
                <RadioGroupCustom
                    label={item.label}
                    radioItems={item.radioItems || []}
                    value={item.value as string}
                    onChange={(value: string) => updateDataForm(index, value)}
                    disabled={item.disable}
                />
            );
        case 'DATEPICKER':
            return (
                <DatepickerCustom
                    label={item.label}
                    value={item.value as Dayjs}
                    locale={item.locale!}
                    onChange={(newValue) => updateDataForm(index, newValue!)}
                    disabled={item.disable}
                />
            );
        case 'TIMEPICKER':
            return (
                <TimePickerCustom
                    label={item.label}
                    value={item.value as Dayjs}
                    locale={item.locale!}
                    onChange={(newValue) => updateDataForm(index, newValue!)}
                    disabled={item.disable}
                />
            );
        default:
            return null;
    }
}
