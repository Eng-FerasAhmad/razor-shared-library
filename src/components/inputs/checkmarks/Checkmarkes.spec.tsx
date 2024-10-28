import { Checkmarks } from 'components/inputs/checkmarks/Checkmarkes';

import { render, screen, fireEvent } from '@testing-library/react';

describe('Checkmarks', () => {
    const mockOnChange = jest.fn();

    const props = {
        label: 'Select Items',
        options: [
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
            { id: '3', name: 'Option 3' },
        ],
        labelKey: 'name',
        valueKey: 'id',
        onChange: mockOnChange,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders the component with the correct label', () => {
        render(<Checkmarks {...props} />);
        expect(screen.getByLabelText('Select Items')).toBeInTheDocument();
    });

    it('opens the dropdown and displays all options', () => {
        render(<Checkmarks {...props} />);
        const selectInput = screen.getByLabelText('Select Items'); // Target the select by label
        fireEvent.mouseDown(selectInput); // Open dropdown

        props.options.forEach((option) => {
            expect(screen.getByText(option.name)).toBeInTheDocument();
        });
    });

    it('selects multiple options and calls onChange with the correct values', () => {
        render(<Checkmarks {...props} />);
        const selectInput = screen.getAllByLabelText('Select Items');
        fireEvent.mouseDown(selectInput[0]); // Open dropdown

        // Select multiple options
        fireEvent.click(screen.getByText('Option 1'));
        fireEvent.click(screen.getByText('Option 3'));

        // Check that the options are rendered as selected
        expect(mockOnChange).toHaveBeenCalledWith([
            { id: '1', name: 'Option 1' },
            { id: '3', name: 'Option 3' },
        ]);

        const selectedValues =
            screen.getAllByLabelText('Select Items')[0].textContent;
        expect(selectedValues).toContain('Option 1');
        expect(selectedValues).toContain('Option 3');
    });

    it('deselects an option and updates the selected values', () => {
        render(<Checkmarks {...props} />);
        const selectInput = screen.getAllByLabelText('Select Items');
        fireEvent.mouseDown(selectInput[0]); // Open dropdown

        // Select options to start with multiple selections
        fireEvent.click(screen.getByText('Option 1'));
        fireEvent.click(screen.getByText('Option 3'));

        // Deselect one option
        fireEvent.click(screen.getByText('Option 3'));

        expect(mockOnChange).toHaveBeenLastCalledWith([
            { id: '1', name: 'Option 1' },
        ]);

        const selectedValues =
            screen.getAllByLabelText('Select Items')[0].textContent;
        expect(selectedValues).toContain('Option 1');
        expect(selectedValues).not.toContain('Option 3');
    });

    it('displays selected options correctly in the input field', () => {
        render(<Checkmarks {...props} />);
        const selectInput = screen.getByLabelText('Select Items');
        fireEvent.mouseDown(selectInput); // Open dropdown

        // Select multiple options
        fireEvent.click(screen.getByText('Option 1'));
        fireEvent.click(screen.getByText('Option 2'));

        // Check rendered value
        const selectedValues =
            screen.getAllByLabelText('Select Items')[0].textContent;
        expect(selectedValues).toContain('Option 1, Option 2');
    });
});
