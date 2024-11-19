import { ReactElement } from '../../../../node_modules/react';
interface Props {
    label: string;
    value: string | number;
    onChange: (selectedIconName: string | null) => void;
}
export declare function AmenityIcons({ label, value, onChange }: Props): ReactElement;
export {};
