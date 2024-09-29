import { FormDataSet } from 'src/components/form-creator/types';

import { FormCreator } from './FormCreator'; // Adjust the import path accordingly

import { render, screen, fireEvent } from '@testing-library/react';

describe('FormCreator', () => {
    const mockUpdateFrom = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders text inputs based on formDataSet', () => {
        const initialFormDataSet: FormDataSet[] = [
            {
                value: '',
                label: 'First Text Field',
                controller: 'TEXT',
                required: true,
            },
            {
                value: '',
                label: 'Second Text Field',
                controller: 'TEXT',
                required: false,
            },
        ];

        render(
            <FormCreator
                formDataSet={initialFormDataSet}
                onUpdateFrom={mockUpdateFrom}
            />
        );

        expect(screen.getByText('First Text Field')).toBeInTheDocument();
    });

    it('handles checkbox inputs correctly', () => {
        const checkboxFormDataSet: FormDataSet[] = [
            {
                value: false,
                label: 'Accept Terms',
                controller: 'CHECKBOX',
                required: true,
            },
        ];

        render(
            <FormCreator
                formDataSet={checkboxFormDataSet}
                onUpdateFrom={mockUpdateFrom}
            />
        );

        const checkbox = screen.getByLabelText('Accept Terms');
        fireEvent.click(checkbox);

        expect(mockUpdateFrom).toHaveBeenCalledWith([
            {
                value: true,
                label: 'Accept Terms',
                controller: 'CHECKBOX',
                required: true,
            },
        ]);
    });
});
