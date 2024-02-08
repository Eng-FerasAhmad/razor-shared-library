export interface InputTextProps {
    label?: string;
    placeholder?: string;
    value: string;
    autoFocus?: boolean;
    errorLabel?: string;
    disabled?: boolean;
    handleChange: (e: string) => void;
    style?: React.CSSProperties;
}
