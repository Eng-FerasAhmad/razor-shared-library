import { ReactElement } from 'react';

import { InputNumberContainer } from './styles';

export function InputNumber(): ReactElement {
    return (
        <InputNumberContainer data-testid="input-number">
            <>input number</>
        </InputNumberContainer>
    );
}
