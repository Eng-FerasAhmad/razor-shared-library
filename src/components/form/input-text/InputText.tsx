import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { ClearWrapper, ErrorLabelWrapper, InputWrapper, LabelWrapper } from 'src/components/form/input-text/styles';
import { color } from 'src/shared/color';
import { shouldForwardProp } from 'src/shared/common';
import { StyleSheetManager } from 'styled-components';
import { InputTextContainer } from './styles';
import { InputTextProps } from './types';

export function InputText({
    label,
    value,
    handleChange,
    autoFocus,
    disabled,
    errorLabel,
    style,
}: InputTextProps): JSX.Element {
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>(value)
    const clear = useRef(false);

    const hasLabel = label.length > 0;
    const hasValue = inputValue.trim().length > 0;
    const hasError =  errorLabel !== undefined && errorLabel!.length > 0;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | null): void => {
        if (e?.target && e?.target.value.length > 0) {
            handleChange(e?.target.value);
            setInputValue(e.target.value);
        } else {
            handleChange('');
            setInputValue('');
        }
    }

    const onFocusHandler = (): void => {
        setHasFocus(true);   
    }

    const onBlurHandler = (): void => {
        if (clear.current) {
            clear.current = false;
            inputRef.current?.focus();
        } else {
            setHasFocus(false);
        }
    }

    const clearInput = (): void => {
        handleChange('');
        setInputValue('');
        inputRef.current?.focus();
    }

    const onMouseDownHandler = (): void => {
        clear.current = true;
    }

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <InputTextContainer data-testid="input-text">

                {hasLabel && (
                    <LabelWrapper hasFocus={hasFocus} hasValue={hasValue} hasLabel={hasLabel} hasError={hasError}>
                        {label}
                    </LabelWrapper>
                )}
                
                {hasValue && hasFocus && (
                    <ClearWrapper onMouseDown={onMouseDownHandler} onClick={clearInput}>
                        <IoClose size={16} color={color.border} />
                    </ClearWrapper>
                )}

                <InputWrapper
                    id="input-text"
                    role="input-text"
                    ref={inputRef}
                    value={inputValue}
                    hasValue={hasValue}
                    hasError={hasError}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    hasLabel={hasLabel}
                    hasFocus={hasFocus}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    style={style}
                />

                {hasError && !hasFocus && (
                    <ErrorLabelWrapper>
                        {errorLabel}
                    </ErrorLabelWrapper>
                )}
            </InputTextContainer>
        </StyleSheetManager>
    );
}
