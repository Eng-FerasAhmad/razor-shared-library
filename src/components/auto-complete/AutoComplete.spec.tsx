import { render, screen } from '@testing-library/react';
import { AutoCompleteOptions } from 'src/components/auto-complete/types';
import { AutoCompleteCustom } from 'components/auto-complete/AutoComplete';

describe('AutoCompleteCustom', () => {
    const mockOnChange = jest.fn();

    const options: AutoCompleteOptions[] = [
        { value: '1', label: 'Option 1', icon: <span>🏷️</span> },
        { value: '2', label: 'Option 2', icon: <span>🏷️</span> },
    ];

    it('renders the component with given props', () => {
        render(
            <AutoCompleteCustom
                options={options}
                label="Test Label"
                value={null}
                onChange={mockOnChange}
            />
        );
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('updates input value based on selected option', () => {
        const { rerender } = render(
            <AutoCompleteCustom
                options={options}
                label="Test Label"
                value={null}
                onChange={mockOnChange}
            />
        );
        rerender(
            <AutoCompleteCustom
                options={options}
                label="Test Label"
                value={options[0]}
                onChange={mockOnChange}
            />
        );
        expect(screen.getByLabelText('Test Label')).toHaveValue('Option 1');
    });
});
