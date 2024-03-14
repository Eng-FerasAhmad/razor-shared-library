import { Box, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { ChangeEvent, useCallback, useState } from 'react';
import { InputSelect } from '../form/input-select/InputSelect';
import { InputText } from '../form/input-text/InputText';
import { RadioGroupCustom } from '../form/radio-group/RadioGroup';
import { SwitchCustom } from '../form/switch/Switch';
import { Textarea } from '../form/textarea/Textarea';
import { DatepickerCustom } from 'src/components/datepicker/Datepicker';
import { CheckboxCustom } from 'src/components/form/checkbox/Checkbox';
import { Controller, FormDataSet } from 'src/components/form-creator/types';
import { TimePickerCustom } from 'src/components/time-picker/TimePicker';

interface Props {
    formDataSet: FormDataSet[];
    onUpdateFrom: (returnFormData: FormDataSet[]) => void;
}

export function FormCreator({ formDataSet, onUpdateFrom }: Props): JSX.Element {
    const [returnFormData, setReturnFormData] =
        useState<FormDataSet[]>(formDataSet);
    const [text, setText] = useState<string>('');
    const [num, setNum] = useState<number>(0);
    const [select, setSelect] = useState<string>('');
    const [switchControl, setSwitchControl] = useState<boolean | undefined>(
        undefined
    );
    const [checkControl, setCheckControl] = useState<boolean | undefined>(
        undefined
    );
    const [textArea, setTextArea] = useState<string>('');

    const updateDataForm = useCallback(
        (index: number, value: string | number | boolean | Dayjs) => {
            returnFormData[index] = { ...returnFormData[index], value };
            setReturnFormData(returnFormData);
            onUpdateFrom(returnFormData);
        },
        [returnFormData]
    );

    const textChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        setText(e.target.value);
        updateDataForm(index, e.target.value);
    };

    const numberChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        setNum(Number.parseInt(e.target.value, 10));
        updateDataForm(index, e.target.value);
    };

    const selectChangeHandler = (e: SelectChangeEvent, index: number): void => {
        setSelect(e.target.value as string);
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
    };

    const radioChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ): void => {
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
    ): JSX.Element => {
        switch (item.controller) {
            case Controller.TEXT:
                return (
                    <InputText
                        value={text === '' ? item.value : text}
                        label={item.label}
                        size="medium"
                        onChange={(e) => textChangeHandler(e, index)}
                        error={item.error}
                        disabled={item.disable}
                    />
                );
            case Controller.NUMBER:
                return (
                    <InputText
                        value={num === 0 ? item.value : num}
                        label={item.label}
                        size="medium"
                        onChange={(e) => numberChangeHandler(e, index)}
                        error={item.error}
                        disabled={item.disable}
                    />
                );
            case Controller.SELECT:
                return (
                    <InputSelect
                        items={item.selectItems!}
                        label={item.label}
                        value={select === '' ? (item.value as string) : select}
                        handleChange={(e) => selectChangeHandler(e, index)}
                        error={item.error}
                        disabled={item.disable}
                    />
                );
            case Controller.CHECKBOX:
                return (
                    <CheckboxCustom
                        checked={
                            checkControl === undefined
                                ? (item.value as boolean)
                                : checkControl
                        }
                        label={item.label}
                        onChange={(e) => checkChangeHandler(e, index)}
                        disabled={item.disable}
                    />
                );
            case Controller.SWITCH:
                return (
                    <SwitchCustom
                        checked={
                            switchControl === undefined
                                ? (item.value as boolean)
                                : switchControl
                        }
                        label={item.label}
                        labelPlacement="start"
                        onChange={(e) => switchChangeHandler(e, index)}
                        disabled={item.disable}
                    />
                );
            case Controller.TEXTAREA:
                return (
                    <Textarea
                        disabled={item.disable}
                        error={item.error}
                        label={item.label}
                        value={textArea === '' ? item.value : textArea}
                        size="medium"
                        onChange={(e) => textAreaChangeHandler(e, index)}
                    />
                );
            case Controller.RADIO:
                return (
                    <RadioGroupCustom
                        label={item.label}
                        radioItems={item.radioItems!}
                        value={item.value as string}
                        onChange={(e) => radioChangeHandler(e, index)}
                        disabled={item.disable!}
                    />
                );
            case Controller.DATEPICKER:
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
            case Controller.TIMEPICKER:
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
                return (
                    <InputText
                        value={text === '' ? item.value : text}
                        label={item.label}
                        size="small"
                        onChange={(e) => textChangeHandler(e, index)}
                        error={item.error}
                        disabled={item.disable}
                    />
                );
        }
    };

    return (
        <>
            {formDataSet &&
                formDataSet.map((item, index) => {
                    return (
                        <Box
                            sx={{
                                mt: 3,
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
