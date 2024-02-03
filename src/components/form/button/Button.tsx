import { ReactElement } from 'react';
import { StyleSheetManager } from 'styled-components';
import { ButtonContainer, EndIconWrapper, StartIconWrapper } from './styles';
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
    style,
}: Props): JSX.Element {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <ButtonContainer
                variant={variant}
                color={color}
                size={size}
                disabled={disabled}
                onClick={clickHandler}
                data-testid="button"
                style={style}
            >
                <StartIconWrapper>{startIcon}</StartIconWrapper>
                {label}
                <EndIconWrapper>{loading ? <>...</> : endIcon}</EndIconWrapper>
            </ButtonContainer>
        </StyleSheetManager>
    );
}
