import { InputDigitContainer } from './styles';
import { ReactElement } from 'react';

export function InputDigit(): ReactElement {
    return (
        <InputDigitContainer data-testid="input-digit">
            <>input digit</>
        </InputDigitContainer>
    );
}
