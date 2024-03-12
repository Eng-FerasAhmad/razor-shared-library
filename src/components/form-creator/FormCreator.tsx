import { Box } from '@mui/material';
import { ButtonCustom } from '../form/button/Button';
import { InputSelect } from '../form/input-select/InputSelect';
import { InputText } from '../form/input-text/InputText';
import { SwitchCustom } from '../form/switch/Switch';
import { Textarea } from '../form/textarea/Textarea';
import { CheckboxCustom } from 'src/components/form/checkbox/Checkbox';
import { Controller, FormDataSet } from 'src/components/form-creator/types';
import { TimePickerCustom } from 'src/components/time-picker/TimePicker';
import { Datepicker } from 'src/index';
import { RadioGroupCustom } from '../form/radio-group/RadioGroup';

interface Props {
    formDataSet: FormDataSet[];
}

export function FormCreator({ formDataSet }: Props): JSX.Element {
    const createController = (item: FormDataSet): JSX.Element => {
        switch (item.controller) {
            case Controller.TEXT:
                return (
                    <InputText
                        value={item.value}
                        label={item.label}
                        size="small"
                    />
                );
            case Controller.NUMBER:
                return (
                    <InputText
                        value={item.value}
                        label={item.label}
                        size="small"
                    />
                );
            case Controller.SELECT:
                return (
                    <InputSelect
                        items={item.selectItems!}
                        label={item.label}
                        value={item.value as string}
                        handleChange={() => item.handleChange}
                    />
                );
            case Controller.CHECKBOX:
                return <CheckboxCustom label={item.label} />;
            case Controller.SWITCH:
                return <SwitchCustom value={item.value} label={item.label} labelPlacement="start" />;
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
            <>
                {formDataSet.map((item, index) => {
                    return (
                        <Box
                            sx={{
                                mt: 3,
                            }}
                            key={index}
                        >
                            {createController(item)}
                        </Box>
                    );
                })}
            </>
        </>
    );
}
