import { Box, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import { Controller, FormDataSet } from 'src/components/form-creator/types';
import { CheckboxCustom } from 'src/components/form/checkbox/Checkbox';
import { TimePickerCustom } from 'src/components/time-picker/TimePicker';
import { Datepicker } from 'src/index';
import { ButtonCustom } from '../form/button/Button';
import { InputSelect } from '../form/input-select/InputSelect';
import { InputText } from '../form/input-text/InputText';
import { RadioGroupCustom } from '../form/radio-group/RadioGroup';
import { SwitchCustom } from '../form/switch/Switch';
import { Textarea } from '../form/textarea/Textarea';

interface Props {
    formDataSet: FormDataSet[];
    onUpdateFrom: (returnFormData: FormDataSet[]) => void
}

export function FormCreator({ formDataSet, onUpdateFrom }: Props): JSX.Element {
    const [returnFormData, setReturnFormData] = useState<FormDataSet[]>(formDataSet);
    const [text, setText] = useState<string>('');
    const [num, setNum] = useState<number>(0);
    const [select, setSelect] = useState<string>('');
    const [switchControl, setSwitchControl] = useState<boolean | undefined>(undefined);
    const [checkControl, setCheckControl] = useState<boolean | undefined>(undefined);
    
    const textChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ): void => {
        setText(e.target.value);
        updateDataForm(index, e.target.value);
    };

    const numberChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ): void => {
        setNum(Number.parseInt(e.target.value));
        updateDataForm(index, e.target.value);
    };
    
    const selectChangeHandler = (
        e: SelectChangeEvent,
        index: number,
    ): void => {
        setSelect(e.target.value);
        updateDataForm(index, e.target.value);
    };

    const checkChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
    ): void => {
        setCheckControl(e.target.checked);
        updateDataForm(index, e.target.checked);
    };

    const switchChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
    ): void => {
        setSwitchControl(e.target.checked);
        updateDataForm(index, e.target.checked);
    };
    
    const updateDataForm = useCallback((index: number, value: string | number | boolean | Date) => {       
        returnFormData[index] = { ...returnFormData[index], value: value};
        setReturnFormData(returnFormData)
        onUpdateFrom(returnFormData);
    }, [returnFormData]);

    const createController = (item: FormDataSet, index: number): JSX.Element => {
        switch (item.controller) {
            case Controller.TEXT:
                return (
                    <InputText
                        value={text==='' ? item.value : text}
                        label={item.label}
                        size="small"
                        onChange={(e) => textChangeHandler(e, index)}
                    />
                );
            case Controller.NUMBER:
                return (
                    <InputText
                        value={num===0 ? item.value : num}
                        label={item.label}
                        size="small"
                        onChange={(e) => numberChangeHandler(e, index)}
                    />
                );
            case Controller.SELECT:
                return (
                    <InputSelect
                        items={item.selectItems!}
                        label={item.label}
                        value={select=== '' ? item.value as string : select}
                        handleChange={(e) => selectChangeHandler(e, index)}
                    />
                );
            case Controller.CHECKBOX:
                return <CheckboxCustom checked={checkControl===undefined ? item.value as boolean :checkControl} label={item.label} onChange={(e) => checkChangeHandler(e, index)}/>;
            case Controller.SWITCH:
                return (
                    <SwitchCustom
                        checked={switchControl===undefined ? item.value as boolean : switchControl}
                        label={item.label}
                        labelPlacement="start"
                        onChange={(e) => switchChangeHandler(e, index)}
                    />
                );
            case Controller.TEXTAREA:
                return <Textarea label={item.label} value={item.value} />;
            case Controller.BUTTON:
                return (
                    <ButtonCustom
                        label={item.label}
                        variant="contained"
                        color="primary"
                    />
                );
            case Controller.RADIO:
                return (
                    <RadioGroupCustom
                        label={item.label}
                        radioItems={item.radioItems!}
                        defaultValue={item.radioItems![0].value}
                    />
                );
            case Controller.DATEPICKER:
                return <Datepicker locale={item.locale!} label={item.label} />;
            case Controller.TIMEPICKER:
                return (
                    <TimePickerCustom
                        locale={item.locale!}
                        label={item.label}
                    />
                );
            default:
                return <InputText value={item.value} label={item.label} />;
        }
    };

    return (
        <>
            {formDataSet && formDataSet.map((item, index) => {
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
