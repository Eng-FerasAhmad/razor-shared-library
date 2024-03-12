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
            error: false,
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
    ];

    const [formDataSet, setFormDataSet] = useState<FormDataSet[]>(d);

    useEffect(() => {
        setFormDataSet(d)
    }, []);

    const onUpdateFrom = (data: FormDataSet[]): void => {
        console.log('return data', data)
        //setFormDataSet(data);
    }

    return (
        <>
            <FormCreator formDataSet={formDataSet} onUpdateFrom={onUpdateFrom} />
        </>
    );
}
