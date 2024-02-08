import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize, fonts } from 'src/shared/fonts';
import styled from 'styled-components';

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
        return color.grayDarker;
    }

    if (props.hasError) {
        return color.errorDark;
    }

    return color.gray;
};

export const clearPaddingTop = (props: InputProps): string => {
    if (props.hasLabel) {
        return pixelToRem(30);
    }

    return pixelToRem(16);
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
        return color.errorDark;
    }

    if (props.hasFocus) {
        return color.grayDarker;
    }

    return color.border;
};

export const InputTextContainer = styled.div`
    width: 100%;
    height: 100%;
    font-family: ${fonts.primary};
    position: relative;
    font-size: ${pixelToRem(fontSize.font16)};
    line-height: ${pixelToRem(15)};
`;

export const LabelWrapper = styled.label<InputProps>`
    white-space: nowrap;
    word-break: keep-all;
    pointer-events: none;
    color: ${getInputLabelColor};
    padding: 0;
`;

export const ClearWrapper = styled.div<InputProps>`
    cursor: pointer;
    position: absolute;
    width: ${pixelToRem(20)};
    height: ${pixelToRem(20)};
    max-width: ${pixelToRem(24)};
    max-height: ${pixelToRem(24)};
    padding-top: ${clearPaddingTop};
    padding-right: ${pixelToRem(10)};
    top: 0;
    right: 0;
`;

export const ErrorLabelWrapper = styled.div`
    user-select: none;
    position: absolute;
    white-space: nowrap;
    word-break: keep-all;
    pointer-events: none;
    color: ${color.errorDark};
    font-size: ${pixelToRem(fontSize.font12)};
    margin-left: ${pixelToRem(2)};
    margin-top: ${pixelToRem(8)};
    line-height: ${pixelToRem(15)};
`;

export const InputWrapper = styled.input<InputProps>`
    width: 100%;
    height: ${pixelToRem(45)};
    transition: 0.1s;
    outline: none;
    color: ${getInputColor};
    background-color: ${getInputBackgroundColor};
    font-size: inherit;
    line-height: ${getInputLineHeight};
    border: ${pixelToRem(1)} solid ${getBorderColor};
    border-radius: ${pixelToRem(5)};
    padding: ${pixelToRem(10)};
    margin: ${pixelToRem(5, 0)};
    box-sizing: border-box;
`;
