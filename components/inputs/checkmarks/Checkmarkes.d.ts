interface Props {
    label: string;
    options: Record<string, string>[];
    labelKey: keyof Record<string, string>;
    valueKey: keyof Record<string, string>;
    onChange: (selectedItems: Record<string, string>[]) => void;
}
export declare function Checkmarks({ label, options, labelKey, valueKey, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
