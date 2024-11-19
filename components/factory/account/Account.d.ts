import { ReactNode } from '../../../../node_modules/react';
type LoginItem = {
    label: string;
    icon: ReactNode;
    onClick: () => void;
};
interface LoginSwitchProps {
    items: LoginItem[];
    title: string;
}
export declare function Account({ items, title }: LoginSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
