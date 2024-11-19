type Language = {
    lang: string;
    nativeName: string;
};
interface Props {
    languages: Language[];
    defaultLanguage: string;
    onSelect: (short: string) => void;
}
export declare function LanguageSwitch({ languages, defaultLanguage, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
