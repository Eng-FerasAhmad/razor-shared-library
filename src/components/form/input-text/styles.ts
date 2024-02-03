import styled from 'styled-components';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize, fonts } from 'src/shared/fonts';

interface InputProps {
    hasValue: boolean;
    hasFocus: boolean;
    hasError?: boolean;
    hasLabel?: boolean;
    disabled?: boolean;
}

export const getInputLabelColor = (props: InputProps): string => {
    if (props.disabled) {
        return color.disabled;
    }

    if (props.hasFocus) {
        return color.primary;
    }

    if (props.hasError) {
        return color.error;
    }

    return color.gray;
};

export const getInputLabelPadding = (props: InputProps): string => {
    if (props.hasFocus || props.hasValue) {
        return pixelToRem(5);
    }

    return pixelToRem(16);
};

export const getInputLabelFontsize = (props: InputProps): string => {
    if (props.hasFocus || props.hasValue) {
        return pixelToRem(fontSize.font12);
    }

    return pixelToRem(fontSize.font14);
};

export const getInputHeight = (props: InputProps): string => {
    if (props.hasLabel) {
        return '100%';
    }

    return 'auto';
};

export const getInputColor = (props: InputProps): string => {
    if (props.disabled) {
        return color.disabled;
    }

    return color.fontDark;
};

export const getInputBackgroundColor = (props: InputProps): string => {
    if (props.disabled) {
        return color.disabled;
    }

    return color.light;
};

export const getInputLineHeight = (props: InputProps): string => {
    if (props.hasLabel) {
        return pixelToRem(24);
    }

    return pixelToRem(0);
};

export const getBorderColor = (props: InputProps): string => {
    if (props.disabled) {
        return color.border;
    }

    if (props.hasError && !props.hasFocus) {
        return color.error;
    }

    if (props.hasFocus) {
        return color.primary;
    }

    return color.border;
};

export const InputTextContainer = styled.div`
    width: 100%;
    height: ${pixelToRem(45)};
    font-family: ${fonts.primary};
    position: relative;
`;

export const LabelWrapper = styled.label<InputProps>`
    transition: 0.2s;
    user-select: none;
    position: absolute;
    white-space: nowrap;
    word-break: keep-all;
    pointer-events: none;
    color: ${getInputLabelColor};
    padding-top: ${getInputLabelPadding};
    font-size: ${getInputLabelFontsize};
    padding-left: ${pixelToRem(12)};
    line-height: ${pixelToRem(15)};
`;

export const ClearWrapper = styled.div`
    cursor: pointer;
    position: absolute;
    width: ${pixelToRem(20)};
    height: ${pixelToRem(20)};
    max-width: ${pixelToRem(20)};
    max-height: ${pixelToRem(20)};
    padding: ${pixelToRem(16, 5, 0, 0)};
    top: 0;
    right: 0;
`;

export const ErrorLabelWrapper = styled.div`
    user-select: none;
    position: absolute;
    white-space: nowrap;
    word-break: keep-all;
    pointer-events: none;
    color: ${color.error};
    font-size: ${pixelToRem(fontSize.font12)};
    margin-left: ${pixelToRem(2)};
    margin-top: ${pixelToRem(8)};
    line-height: ${pixelToRem(15)};
`;

export const InputWrapper = styled.input<InputProps>`
    width: 100%;
    height: ${getInputHeight};
    transition: 0.1s;
    outline: none;
    color: ${getInputColor};
    background-color: ${getInputBackgroundColor};
    font-size: ${pixelToRem(fontSize.font14)};
    line-height: ${getInputLineHeight};
    border: ${pixelToRem(1)} solid ${getBorderColor};
    border-radius: ${pixelToRem(5)};
    padding: ${pixelToRem(14, 0, 5, 11)};
    margin: ${pixelToRem(0)};
    box-sizing: border-box;
`;
