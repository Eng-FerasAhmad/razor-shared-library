import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { StyleSheetManager } from 'styled-components';
import {
    InputTextContainer,
    ClearWrapper,
    ErrorLabelWrapper,
    InputWrapper,
    LabelWrapper,
} from './styles';

import { InputTextProps } from './types';
import { color } from 'src/shared/color';
import { shouldForwardProp } from 'src/shared/common';

export function InputText({
    label,
    placeholder,
    value,
    handleChange,
    autoFocus,
    disabled,
    errorLabel,
    style,
}: InputTextProps): JSX.Element {
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const inputRef: RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>(value);
    const clear = useRef(false);

    const hasLabel = label && label.length > 0;
    const hasValue = inputValue.trim().length > 0;
    const hasError = errorLabel !== undefined && errorLabel!.length > 0;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | null): void => {
        if (e?.target && e?.target.value.length > 0) {
            handleChange(e?.target.value);
            setInputValue(e.target.value);
        } else {
            handleChange('');
            setInputValue('');
        }
    };

    const onFocusHandler = (): void => {
        setHasFocus(true);
    };

    const onBlurHandler = (): void => {
        if (clear.current) {
            clear.current = false;
            inputRef.current?.focus();
        } else {
            setHasFocus(false);
        }
    };

    const clearInput = (): void => {
        handleChange('');
        setInputValue('');
        inputRef.current?.focus();
    };

    const onMouseDownHandler = (): void => {
        clear.current = true;
    };

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <InputTextContainer data-testid="input-text-container">
                {hasLabel && (
                    <LabelWrapper
                        data-testid="input-label"
                        hasFocus={hasFocus}
                        hasValue={hasValue}
                        hasLabel={hasLabel}
                        hasError={hasError}
                    >
                        {label}
                    </LabelWrapper>
                )}

                <InputWrapper
                    id="input-text"
                    role="input-text"
                    data-testid="input-text"
                    ref={inputRef}
                    value={inputValue}
                    placeholder={placeholder}
                    hasValue={hasValue}
                    hasError={hasError}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    hasFocus={hasFocus}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    hasLabel={!!hasLabel}
                    style={style}
                />

                {hasValue && hasFocus && (
                    <ClearWrapper
                        hasLabel={!!hasLabel}
                        hasValue={hasValue}
                        hasFocus={hasFocus}
                        data-testid="input-clear"
                        onMouseDown={onMouseDownHandler}
                        onClick={clearInput}
                    >
                        <IoClose size={24} color={color.border} />
                    </ClearWrapper>
                )}

                {hasError && !hasFocus && (
                    <ErrorLabelWrapper data-testid="input-error">
                        {errorLabel}
                    </ErrorLabelWrapper>
                )}
            </InputTextContainer>
        </StyleSheetManager>
    );
}
