import { Box, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import {
    ChangeEvent,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { InputSelect } from '../form/input-select/InputSelect';
import { InputText } from '../form/input-text/InputText';
import { RadioGroupCustom } from '../form/radio-group/RadioGroup';
import { SwitchCustom } from '../form/switch/Switch';
import { Textarea } from '../form/textarea/Textarea';
import { DatepickerCustom } from 'src/components/datepicker/Datepicker';
import { CheckboxCustom } from 'src/components/form/checkbox/Checkbox';
import { FormDataSet } from 'src/components/form-creator/types';
import { TimePickerCustom } from 'src/components/time-picker/TimePicker';

interface Props {
    formDataSet: FormDataSet[];
    onUpdateFrom: (formData: FormDataSet[]) => void;
}

export function FormCreator({
    formDataSet,
    onUpdateFrom,
}: Props): ReactElement {
    const [formData, setFormData] = useState<FormDataSet[]>([]);
    const [, setText] = useState<string>('');
    const [, setNum] = useState<number>(0);
    const [, setSelect] = useState<string>('');
    const [, setSwitchControl] = useState<boolean | undefined>(undefined);
    const [, setCheckControl] = useState<boolean | undefined>(undefined);
    const [, setRadio] = useState<string>('');
    const [, setTextArea] = useState<string>('');

    const [textChanged, setTextChanged] = useState<boolean>(false);
    const [numChanged, setNumChanged] = useState<boolean>(false);
    const [textAreaChanged, setTextAreaChanged] = useState<boolean>(false);

    useEffect(() => {
        const d: FormDataSet[] = [];
        formDataSet.map((item) => d.push(item));
        setFormData(d);
    }, [formData, formDataSet]);

    const updateDataForm = useCallback(
        (index: number, value: string | number | boolean | Dayjs) => {
            formData[index] = { ...formData[index], value };
            setFormData(formData);
            onUpdateFrom(formData);
        },
        [formData, onUpdateFrom]
    );

    const textChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        setText(e.target.value);
        updateDataForm(index, e.target.value);
        setTextChanged(true);
    };

    const numberChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        setNum(Number.parseInt(e.target.value, 10));
        updateDataForm(index, e.target.value);
        setNumChanged(true);
    };

    const selectChangeHandler = (e: SelectChangeEvent, index: number): void => {
        setSelect(e.target.value);
        updateDataForm(index, e.target.value);
    };

    const checkChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ): void => {
        setCheckControl(e.target.checked);
        updateDataForm(index, e.target.checked);
    };

    const switchChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ): void => {
        setSwitchControl(e.target.checked);
        updateDataForm(index, e.target.checked);
    };

    const textAreaChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        setTextArea(e.target.value);
        updateDataForm(index, e.target.value);
        setTextAreaChanged(true);
    };

    const radioChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ): void => {
        setRadio(e.target.value);
        updateDataForm(index, e.target.value);
    };

    const dateChangeHandler = (e: Dayjs, index: number): void => {
        updateDataForm(index, e);
    };

    const timeChangeHandler = (e: Dayjs, index: number): void => {
        updateDataForm(index, e);
    };

    const createController = (
        item: FormDataSet,
        index: number
    ): ReactElement => {
        switch (item.controller) {
            case 'TEXT':
                return (
                    <InputText
                        value={item.value}
                        label={item.label}
                        size="medium"
                        onChange={(e) => textChangeHandler(e, index)}
                        error={
                            item.required && item.value === '' && textChanged
                        }
                        disabled={item.disable}
                        required={item.required}
                    />
                );
            case 'NUMBER':
                return (
                    <InputText
                        value={item.value}
                        label={item.label}
                        size="medium"
                        onChange={(e) => numberChangeHandler(e, index)}
                        error={item.required && item.value === '' && numChanged}
                        disabled={item.disable}
                        required={item.required}
                    />
                );
            case 'SELECT':
                return (
                    <InputSelect
                        items={item.selectItems!}
                        label={item.label}
                        value={item.value as string}
                        handleChange={(e) => selectChangeHandler(e, index)}
                        error={item.required && item.value === ''}
                        disabled={item.disable}
                    />
                );
            case 'CHECKBOX':
                return (
                    <CheckboxCustom
                        checked={item.value as boolean}
                        label={item.label}
                        onChange={(e) => checkChangeHandler(e, index)}
                        disabled={item.disable}
                    />
                );
            case 'SWITCH':
                return (
                    <SwitchCustom
                        checked={item.value as boolean}
                        label={item.label}
                        labelPlacement="start"
                        onChange={(e) => switchChangeHandler(e, index)}
                        disabled={item.disable}
                    />
                );
            case 'TEXTAREA':
                return (
                    <Textarea
                        disabled={item.disable}
                        error={
                            item.required &&
                            item.value === '' &&
                            textAreaChanged
                        }
                        label={item.label}
                        value={item.value}
                        size="medium"
                        onChange={(e) => textAreaChangeHandler(e, index)}
                        required={item.required}
                    />
                );
            case 'RADIO':
                return (
                    <RadioGroupCustom
                        label={item.label}
                        radioItems={item.radioItems!}
                        value={item.value as string}
                        onChange={(e) => radioChangeHandler(e, index)}
                        disabled={item.disable!}
                    />
                );
            case 'DATEPICKER':
                return (
                    <DatepickerCustom
                        label="Datepicker"
                        locale={item.locale!}
                        value={item.value as Dayjs}
                        onChange={(newValue) =>
                            dateChangeHandler(newValue!, index)
                        }
                        disabled={item.disable}
                    />
                );
            case 'TIMEPICKER':
                return (
                    <TimePickerCustom
                        locale={item.locale!}
                        label={item.label}
                        value={item.value as Dayjs}
                        onChange={(newValue) =>
                            timeChangeHandler(newValue!, index)
                        }
                        disabled={item.disable}
                    />
                );
            default:
                return <></>;
        }
    };

    return (
        <>
            {formDataSet &&
                formDataSet.map((item, index) => {
                    return (
                        <Box
                            sx={{
                                mt:
                                    index === 0 || item.controller === 'NONE'
                                        ? 0
                                        : 3,
                            }}
                            key={index}
                        >
                            {createController(item, index)}
                        </Box>
                    );
                })}
        </>
    );
}
