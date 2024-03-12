import { FormCreator } from 'src/components/form-creator/FormCreator';
import { Controller, FormDataSet } from 'src/components/form-creator/types';

const formDataSet: FormDataSet[] = [
    {
        label: 'text',
        value: 'text value',
        newCreate: false,
        controller: Controller.TEXT,
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'Number',
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
        value: true,
        newCreate: false,
        controller: Controller.SWITCH,
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'button',
        value: true,
        newCreate: false,
        controller: Controller.BUTTON,
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
        value: '',
        newCreate: false,
        controller: Controller.RADIO,
        radioItems: [{label: 'Radio 1', value: 'radio1'}, {label: 'Radio 2', value: 'radio2'}],
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'datepicker',
        value: true,
        newCreate: false,
        controller: Controller.DATEPICKER,
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
    {
        label: 'time picker',
        value: true,
        newCreate: false,
        controller: Controller.TIMEPICKER,
        error: false,
        errorLabel: 'none',
        required: false,
        disable: false,
    },
];
export default function FormGenericPalette(): JSX.Element {
    return (
        <>
            <FormCreator formDataSet={formDataSet} />
        </>
    );
}
