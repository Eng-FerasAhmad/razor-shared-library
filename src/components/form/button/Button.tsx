import { ReactElement } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
    ButtonContainer,
    EndIconWrapper,
    ButtonControl,
    StartIconWrapper,
} from './styles';
import { ButtonProps } from './types';
import { shouldForwardProp } from 'src/shared/common';

interface Props extends ButtonProps {
    label: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    loading?: boolean;
    clickHandler: () => void;
}
export function Button({
    label,
    variant = 'contained',
    disabled = false,
    color = 'primary',
    size = 'md',
    startIcon,
    endIcon,
    loading = false,
    clickHandler,
}: Props): JSX.Element {
    return (
        <ButtonContainer data-testid="button">
            <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                <ButtonControl
                    variant={variant}
                    color={color}
                    size={size}
                    disabled={disabled}
                    onClick={clickHandler}
                >
                    <StartIconWrapper>{startIcon}</StartIconWrapper>
                    {label}
                    <EndIconWrapper>
                        {loading ? <>...</> : endIcon}
                    </EndIconWrapper>
                </ButtonControl>
            </StyleSheetManager>
        </ButtonContainer>
    );
}
