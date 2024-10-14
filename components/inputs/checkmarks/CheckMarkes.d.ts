interface MultipleSelectCheckmarksProps {
    options: Record<string, string>[];
    labelKey: keyof Record<string, string>;
    valueKey: keyof Record<string, string>;
    onChange: (selectedItems: Record<string, string>[]) => void;
}
export declare function MultipleSelectCheckmarks({ options, labelKey, valueKey, onChange, }: MultipleSelectCheckmarksProps): import("react/jsx-runtime").JSX.Element;
export {};
