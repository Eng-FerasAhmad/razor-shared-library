import { ReactElement } from 'react';

import { InputDigitContainer } from './styles';

export function InputDigit(): ReactElement {
    return (
        <InputDigitContainer data-testid="input-digit">
            <>input digit</>
        </InputDigitContainer>
    );
}
