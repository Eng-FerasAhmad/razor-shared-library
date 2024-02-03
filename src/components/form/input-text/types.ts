export interface InputTextProps {
    label: string;
    value: string;
    autoFocus?: boolean;
    hasError?: boolean;
    errorLabel?: string;
    disabled?: boolean;
    handleChange: (e: string | undefined) => void;
    style?: React.CSSProperties;
}

