import styled from 'styled-components';
import { ButtonProps } from './types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';

const getColor = (props: ButtonProps): string => {
    if (props.variant !== 'contained') {
        return color.light;
    }

    if (props.disabled) {
        return color.customGrayLight;
    }

    switch (props.color) {
        case 'primary':
            return color.customBlue;
        case 'success':
            return color.customGreen;
        case 'error':
            return color.customRed;
        case 'info':
            return color.customGray;
        case 'warning':
            return color.customYellow;
        default:
            return color.customPurple;
    }
};

const getColorHover = (props: ButtonProps): string => {
    if (props.disabled) {
        return '';
    }

    const isDarker = props.variant === 'contained';

    switch (props.color) {
        case 'primary':
            return isDarker ? color.customBlueDarker : color.customBlue;
        case 'success':
            return isDarker ? color.customGreenDarker : color.customGreen;
        case 'error':
            return isDarker ? color.customRedDarker : color.customRed;
        case 'info':
            return isDarker ? color.customGrayDarker : color.customGray;
        case 'warning':
            return isDarker ? color.customYellowDarker : color.customYellow;
        default:
            return isDarker ? color.customPurpleDarker : color.customPurple;
    }
};

const getFontColor = (props: ButtonProps): string => {
    if (props.disabled) {
        return color.border;
    }

    return color.dark;
};

const getCursor = (props: ButtonProps): string => {
    if (props.disabled) {
        return 'not-allowed';
    }

    return 'pointer';
};

const getBorder = (props: ButtonProps): string => {
    if (props.variant === 'text') {
        return '';
    }

    if (props.disabled) {
        return color.customGrayLight;
    }

    switch (props.color) {
        case 'primary':
            return color.customBlueDarker;
        case 'success':
            return color.customGreenDarker;
        case 'error':
            return color.customRedDarker;
        case 'info':
            return color.customGrayDarker;
        case 'warning':
            return color.customYellowDarker;
        default:
            return color.customPurpleDarker;
    }
};

const getHeight = (props: ButtonProps): string => {
    switch (props.size) {
        case 'sm':
            return pixelToRem(28);
        case 'md':
            return pixelToRem(35);
        case 'lg':
            return pixelToRem(50);
        default:
            return pixelToRem(35);
    }
};

const getFontSize = (props: ButtonProps): string => {
    switch (props.size) {
        case 'sm':
            return pixelToRem(12);
        case 'md':
            return pixelToRem(14);
        case 'lg':
            return pixelToRem(16);
        default:
            return pixelToRem(16);
    }
};

export const ButtonContainer = styled.div`
    height: fit-content;
    width: auto;
`;

export const ButtonControl = styled.button<ButtonProps>`
    height: ${getHeight};
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${pixelToRem(5)};
    background-color: ${getColor};
    font-size: ${getFontSize};
    font-weight: 550;
    color: ${getFontColor};
    cursor: ${getCursor};
    border: ${(props) => (props.variant !== 'text' ? pixelToRem(1) : 0)} solid
        ${getBorder};
    box-shadow: ${(props) =>
        props.variant === 'text'
            ? ''
            : '0 2px 3px 0 rgba(0,0,0,0.2), 0 3px 15px 0 rgba(0,0,0,0.19)'};

    &:hover {
        background-color: ${(props) =>
            props.variant !== 'text' ? getColorHover : ''};
        border: ${(props) => (props.variant !== 'text' ? pixelToRem(1) : 0)}
            solid ${getColorHover};
        text-decoration: ${(props) =>
            props.variant !== 'text' ? '' : 'underline'};
    }

    &:active {
        transform: ${(props) => (props.disabled ? '' : 'translateY(2px)')};
    }
`;

export const StartIconWrapper = styled.div`
    margin: ${pixelToRem(4, 5, 0, 5)};
`;

export const EndIconWrapper = styled.div`
    margin: ${pixelToRem(4, 5, 0, 5)};
`;
