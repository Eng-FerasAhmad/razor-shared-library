import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FormCreator } from 'src/components/form-creator/FormCreator';
import { Controller, FormDataSet } from 'src/components/form-creator/types';

export default function FormGenericPalette(): JSX.Element {
    const d: FormDataSet[] = [
        {
            label: 'color',
            value: 'red',
            newCreate: false,
            controller: Controller.TEXT,
            error: true,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'rgb',
            value: 123,
            newCreate: false,
            controller: Controller.NUMBER,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'select',
            value: 'value1',
            newCreate: false,
            controller: Controller.SELECT,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
            selectItems: [
                { label: 'item1', value: 'value1' },
                { label: 'item2', value: 'value2' },
            ],
        },
        {
            label: 'checkbox',
            value: true,
            newCreate: false,
            controller: Controller.CHECKBOX,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'switch',
            value: false,
            newCreate: false,
            controller: Controller.SWITCH,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'textarea',
            value: 'text area value',
            newCreate: false,
            controller: Controller.TEXTAREA,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'Radio',
            value: 'radio1',
            newCreate: false,
            controller: Controller.RADIO,
            radioItems: [
                { label: 'Radio 1', value: 'radio1' },
                { label: 'Radio 2', value: 'radio2' },
            ],
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
        {
            label: 'datepicker',
            value: dayjs(),
            locale: 'en-gb',
            newCreate: false,
            controller: Controller.DATEPICKER,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: true,
        },
        {
            label: 'time picker',
            value: dayjs(),
            locale: 'de',
            newCreate: false,
            controller: Controller.TIMEPICKER,
            error: false,
            errorLabel: 'none',
            required: false,
            disable: false,
        },
    ];

    const [formDataSet, setFormDataSet] = useState<FormDataSet[]>(d);

    useEffect(() => {
        setFormDataSet(d);
    }, []);

    const onUpdateFrom = (data: FormDataSet[]): void => {
        console.log('return data', data);
        // setFormDataSet(data);
    };

    return (
        <>
            <FormCreator
                formDataSet={formDataSet}
                onUpdateFrom={onUpdateFrom}
            />
        </>
    );
}
