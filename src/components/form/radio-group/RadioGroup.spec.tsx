import { RadioGroupCustom } from 'components/form/radio-group/RadioGroup';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockRadioItems = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
];

describe('RadioGroupCustom', () => {
    it('renders the correct label', () => {
        render(
            <RadioGroupCustom
                label="Test Label"
                radioItems={mockRadioItems}
                value="option1"
            />
        );
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('renders the correct number of radio buttons', () => {
        render(
            <RadioGroupCustom
                label="Test Label"
                radioItems={mockRadioItems}
                value="option1"
            />
        );
        expect(screen.getAllByRole('radio')).toHaveLength(
            mockRadioItems.length
        );
    });

    it('checks the selected radio button based on the value prop', () => {
        render(
            <RadioGroupCustom
                label="Test Label"
                radioItems={mockRadioItems}
                value="option2"
            />
        );
        const radio = screen.getByLabelText('Option 2');
        expect(radio).toBeChecked();
    });

    it('calls onChange when a radio button is selected', () => {
        const handleChange = jest.fn();
        render(
            <RadioGroupCustom
                label="Test Label"
                radioItems={mockRadioItems}
                value="option1"
                onChange={handleChange}
            />
        );
        const radio = screen.getByLabelText('Option 2');
        fireEvent.click(radio);
        expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('disables radio buttons when disabled prop is true', () => {
        render(
            <RadioGroupCustom
                label="Test Label"
                radioItems={mockRadioItems}
                value="option1"
                disabled
            />
        );
        const radio = screen.getByLabelText('Option 1');
        expect(radio).toBeDisabled();
    });
});
