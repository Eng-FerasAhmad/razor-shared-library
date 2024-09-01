import { InputNumberContainer } from './styles';
import { ReactElement } from 'react';

export function InputNumber(): ReactElement {
    return (
        <InputNumberContainer data-testid="input-number">
            <>input number</>
        </InputNumberContainer>
    );
}
