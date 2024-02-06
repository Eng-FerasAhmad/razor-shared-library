import styled from 'styled-components';
import { ButtonProps } from './types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';

const getBackgroundColor = (props: ButtonProps): string => {
    if (props.variant !== 'contained') {
        return color.light;
    }

    if (props.disabled) {
        return color.disabled;
    }

    switch (props.color) {
        case 'primary':
            return color.primary;
        case 'success':
            return color.success;
        case 'error':
            return color.error;
        case 'info':
            return color.info;
        case 'warning':
            return color.warning;
        case 'note':
            return color.gray;
        default:
            return color.primary;
    }
};

const getColorHover = (props: ButtonProps): string => {
    if (props.disabled) {
        return '';
    }

    const isDarker = props.variant === 'contained';

    switch (props.color) {
        case 'primary':
            return isDarker ? color.primaryDark : color.primary;
        case 'success':
            return isDarker ? color.successDark : color.success;
        case 'error':
            return isDarker ? color.errorDark : color.error;
        case 'info':
            return isDarker ? color.infoDark : color.info;
        case 'warning':
            return isDarker ? color.warningDark : color.warning;
        case 'note':
            return isDarker ? color.grayDark : color.gray;
        default:
            return isDarker ? color.primaryDark : color.primary;
    }
};

const getFontColor = (props: ButtonProps): string => {
    if (props.disabled) {
        return color.grayDarker;
    }

    switch (props.color) {
        case 'primary':
            return color.primaryDarker;
        case 'success':
            return color.successDarker;
        case 'error':
            return color.errorDarker;
        case 'info':
            return color.infoDarker;
        case 'warning':
            return color.warningDarker;
        case 'note':
            return color.grayDarker;
        default:
            return color.primaryDarker;
    }
};

const getFontColorHover = (props: ButtonProps): string => {
    if (props.disabled) {
        return color.grayDarker;
    }

    switch (props.color) {
        case 'primary':
            return color.primaryDarker;
        case 'success':
            return color.successDarker;
        case 'error':
            return color.errorDarker;
        case 'info':
            return color.infoDarker;
        case 'warning':
            return color.warningDarker;
        case 'note':
            return color.grayDarker;
        default:
            return color.primaryDarker;
    }
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
        return '';
    }

    switch (props.color) {
        case 'primary':
            return color.primary;
        case 'success':
            return color.success;
        case 'error':
            return color.error;
        case 'info':
            return color.info;
        case 'warning':
            return color.warning;
        case 'note':
            return color.gray;
        default:
            return color.primary;
    }
};

const getHeight = (props: ButtonProps): string => {
    switch (props.size) {
        case 'sm':
            return pixelToRem(28);
        case 'md':
            return pixelToRem(35);
        case 'lg':
            return pixelToRem(45);
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

export const ButtonContainer = styled.button<ButtonProps>`
    height: ${getHeight};
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${pixelToRem(5)};
    background-color: ${getBackgroundColor};
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
        color: ${getFontColorHover};
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
