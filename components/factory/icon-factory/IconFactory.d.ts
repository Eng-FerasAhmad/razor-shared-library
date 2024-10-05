import { ReactElement } from '../../../../node_modules/react';
import { IconOptions } from '../../../../../../../../src/components/factory/icon-factory/types';
interface Props {
    options: IconOptions[];
    label: string;
    value: IconOptions | null;
    onChange: (selected: IconOptions | null) => void;
}
export declare function IconFactory({ options, label, value, onChange, }: Props): ReactElement;
export {};
