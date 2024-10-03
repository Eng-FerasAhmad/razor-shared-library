import { IconOptions } from 'components/factory/icon-factory/types';

import { IconFactory } from './IconFactory';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

const mockOptions: IconOptions[] = [
    {
        value: 'icon1',
        label: 'Icon 1',
        icon: () => <img alt="icon1" src="icon1.png" />,
    },
    {
        value: 'icon2',
        label: 'Icon 2',
        icon: () => <img alt="icon2" src="icon2.png" />,
    },
];

const mockOnChange = jest.fn();

describe('IconFactory', () => {
    it('renders with given options', () => {
        render(
            <IconFactory
                options={mockOptions}
                label="Select Icon"
                value={null}
                onChange={mockOnChange}
            />
        );
        expect(screen.getByLabelText('Select Icon')).toBeInTheDocument();
    });

    it('calls onChange when an option is selected', () => {
        render(
            <IconFactory
                options={mockOptions}
                label="Select Icon"
                value={null}
                onChange={mockOnChange}
            />
        );
        const input = screen.getByLabelText('Select Icon');
        fireEvent.focus(input);
        fireEvent.mouseDown(screen.getByRole('combobox'));
        fireEvent.click(screen.getByText('Icon 1'));
        expect(mockOnChange).toHaveBeenCalledWith(mockOptions[0]);
    });

    it('displays the selected value', () => {
        render(
            <IconFactory
                options={mockOptions}
                label="Select Icon"
                value={mockOptions[0]}
                onChange={mockOnChange}
            />
        );
        expect(screen.getByLabelText('Select Icon')).toHaveValue('Icon 1');
    });

    it('updates the input value when typing', () => {
        render(
            <IconFactory
                options={mockOptions}
                label="Select Icon"
                value={null}
                onChange={mockOnChange}
            />
        );
        const input = screen.getByLabelText('Select Icon');
        fireEvent.change(input, { target: { value: 'Icon 1' } });
    });
});
