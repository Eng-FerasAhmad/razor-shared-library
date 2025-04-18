import { amenityOptions } from 'components/factory/amenity-icons/iconList';

import { AmenityIcons } from './AmenityIconsSelectList';

import { render, screen } from '@testing-library/react';

describe('AmenityIcons', () => {
    const mockOnChange = jest.fn();

    const props = {
        label: 'Select an Amenity',
        value: amenityOptions[0].value,
        onChange: mockOnChange,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders without crashing', () => {
        render(<AmenityIcons {...props} />);
        expect(screen.getByLabelText('Select an Amenity')).toBeInTheDocument();
    });

    it('displays the correct initial input value based on props.value', () => {
        render(<AmenityIcons {...props} />);
        const input = screen.getByRole('combobox');
        expect(input).toHaveValue(amenityOptions[0].label);
    });

    it('clears the input when an invalid value is provided', () => {
        render(<AmenityIcons {...props} value="invalid_value" />);

        const input = screen.getByRole('combobox');
        expect(input).toHaveValue('');
    });
});
