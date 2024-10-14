import { MultipleSelectCheckmarks } from 'components/inputs/checkmarks/CheckMarkes';

import { render, screen, fireEvent } from '@testing-library/react';

describe('MultipleSelectCheckmarks component', () => {
    const options = [
        { id: '1', name: 'Option 1' },
        { id: '2', name: 'Option 2' },
        { id: '3', name: 'Option 3' },
    ];

    const labelKey = 'name';
    const valueKey = 'id';
    const onChangeMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders with options', () => {
        render(
            <MultipleSelectCheckmarks
                options={options}
                labelKey={labelKey}
                valueKey={valueKey}
                onChange={onChangeMock}
            />
        );

        // Check if the input field is rendered
        expect(screen.getByLabelText('Select')).toBeInTheDocument();

        // Open the select dropdown
        fireEvent.mouseDown(screen.getByLabelText('Select'));

        // Check if all options are displayed
        options.forEach((option) => {
            expect(screen.getByText(option.name)).toBeInTheDocument();
        });
    });

    test('selects and displays multiple options', () => {
        render(
            <MultipleSelectCheckmarks
                options={options}
                labelKey={labelKey}
                valueKey={valueKey}
                onChange={onChangeMock}
            />
        );

        // Open the select dropdown
        fireEvent.mouseDown(screen.getAllByLabelText('Select')[0]);

        // Select two options
        const option1 = screen.getByText('Option 1').closest('li');
        const option2 = screen.getByText('Option 2').closest('li');
        fireEvent.click(option1!);
        fireEvent.click(option2!);

        // Check if the selected options are displayed in the input field
        expect(screen.getAllByLabelText('Select')[0]).toHaveTextContent(
            'Option 1, Option 2'
        );

        // Check if onChange callback was called with correct values
        expect(onChangeMock).toHaveBeenCalledWith([
            { id: '1', name: 'Option 1' },
            { id: '2', name: 'Option 2' },
        ]);
    });
});
