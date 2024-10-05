import { ReactElement } from '../../../../node_modules/react';
import { AutoCompleteOptions } from '../../../../../../../../src/components/inputs/auto-complete/types';
interface Props {
    options: AutoCompleteOptions[];
    label: string;
    value: AutoCompleteOptions | null;
    onChange: (selected: AutoCompleteOptions | null) => void;
}
export declare function AutoCompleteCustom({ options, label, value, onChange, }: Props): ReactElement;
export {};
