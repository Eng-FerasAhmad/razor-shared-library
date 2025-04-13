import { DateTime } from 'luxon';

import { FormDataSet } from 'components/factory/form-creator/types';

import { FormInputFactory } from './FormInputFactory';

import { render, screen, fireEvent } from '@testing-library/react';

describe('FormInputFactory', () => {
    const mockUpdateDataForm = jest.fn();
    const mockHandleInputChange = jest.fn();

    const baseItem: FormDataSet = {
        label: 'Test Label',
        value: '',
        required: false,
        disable: false,
        controller: '',
        selectItems: [],
        radioItems: [],
        locale: 'de',
    };

    it('renders InputText for TEXT controller', () => {
        const item = { ...baseItem, controller: 'TEXT', value: 'Sample text' };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const input = screen.getByLabelText('Test Label');
        fireEvent.change(input, { target: { value: 'New text' } });
        expect(mockHandleInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            0
        );
    });

    it('renders InputSelect for SELECT controller', () => {
        const item = {
            ...baseItem,
            controller: 'SELECT',
            value: 'option1',
            selectItems: [{ value: 'option1', label: 'Option 1' }],
        };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const select = screen.getByLabelText('Test Label');
        expect(select).toBeInTheDocument();
    });

    it('renders CheckboxCustom for CHECKBOX controller', () => {
        const item = { ...baseItem, controller: 'CHECKBOX', value: true };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const checkbox = screen.getByLabelText('Test Label');
        fireEvent.click(checkbox);
        expect(mockUpdateDataForm).toHaveBeenCalledWith(0, false);
    });

    it('renders SwitchCustom for SWITCH controller', () => {
        const item = { ...baseItem, controller: 'SWITCH', value: false };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const switchInput = screen.getByLabelText('Test Label');
        fireEvent.click(switchInput);
        expect(mockUpdateDataForm).toHaveBeenCalledWith(0, true);
    });

    it('renders Textarea for TEXTAREA controller', () => {
        const item = {
            ...baseItem,
            controller: 'TEXTAREA',
            value: 'Sample text',
        };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const textarea = screen.getByLabelText('Test Label');
        fireEvent.change(textarea, { target: { value: 'New textarea text' } });
        expect(mockHandleInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            0
        );
    });

    it('renders RadioGroupCustom for RADIO controller', () => {
        const item = {
            ...baseItem,
            controller: 'RADIO',
            value: 'option1',
            radioItems: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
            ],
        };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        fireEvent.click(screen.getByLabelText('Option 2'));
        expect(mockUpdateDataForm).toHaveBeenCalledWith(0, 'option2');
    });

    it('renders DatepickerCustom for DATEPICKER controller', () => {
        const dateTimeInstance = DateTime.now();
        const item = {
            ...baseItem,
            controller: 'DATEPICKER',
            value: dateTimeInstance,
        };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const datepicker = screen.getByLabelText('Test Label');
        fireEvent.change(datepicker, {
            target: { value: dateTimeInstance.toFormat('yyyy-MM-dd') },
        });
        expect(mockUpdateDataForm).toHaveBeenCalledWith(0, null);
    });

    it('renders TimePickerCustom for TIMEPICKER controller', () => {
        const timeInstance = DateTime.fromFormat('08:30', 'HH:mm');
        const item = {
            ...baseItem,
            controller: 'TIMEPICKER',
            value: timeInstance,
        };
        render(
            <FormInputFactory
                item={item}
                index={0}
                updateDataForm={mockUpdateDataForm}
                handleInputChange={mockHandleInputChange}
            />
        );

        const timepicker = screen.getByLabelText('Test Label');
        expect(timepicker).toBeInTheDocument();
    });
});
