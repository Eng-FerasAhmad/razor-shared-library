import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { render, screen } from 'src/test/test-utils';
import { InputText } from './InputText';
import {color} from 'src/shared/color';

describe('<InputText />', () => {
    test('should render the component', () => {
        render(
            <InputText label="label" handleChange={jest.fn()} value="value" />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();
        expect(screen.getByTestId('input-text')).toBeInTheDocument();
        expect(screen.getByTestId('input-label')).toBeInTheDocument();
    });

    test('should render the error input', () => {
        render(
            <InputText
                label="label"
                handleChange={jest.fn()}
                value="value"
                errorLabel="error"
            />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();
        expect(screen.getByTestId('input-error')).toBeInTheDocument();
    });

    test('should handle clear icon', async () => {
        const handleChange = jest.fn();
        render(
            <InputText
                label="label"
                handleChange={handleChange}
                value="value"
            />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();

        const input = screen.getByTestId('input-text');
        await act(async () => {
            await userEvent.click(input);
        });

        const clear = screen.getByTestId('input-clear');
        expect(clear).toBeInTheDocument();
        await act(async () => {
            await userEvent.click(clear);
        });

        expect(handleChange).toHaveBeenCalledWith('');
    });

    test('should handle change value', async () => {
        const handleChange = jest.fn();
        render(
            <InputText
                label="label"
                handleChange={handleChange}
                value="value"
            />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();

        const input = screen.getByTestId('input-text');
        await act(async () => {
            await userEvent.clear(input);
        });

    
        expect(handleChange).toHaveBeenCalledWith('');
    });

    test('should render disabled input', () => {
        const handleChange = jest.fn();
        render(
            <InputText
                label="label"
                handleChange={handleChange}
                value="value"
                disabled={true}
            />
        );

        expect(screen.getByTestId('input-text')).toBeInTheDocument();
        expect(screen.getByTestId('input-text')).toHaveStyle(`background-color:${color.disabled}`);
    });
});
