import { ReactElement } from '../../../../node_modules/react';
import { FormDataSet } from '../../../../../../../../src/components/factory/form-creator/types';
interface Props {
    formDataSet: FormDataSet[];
    onUpdateFrom: (formData: FormDataSet[]) => void;
    submit?: boolean;
}
export declare function FormCreator({ formDataSet, onUpdateFrom, submit, }: Props): ReactElement;
export {};
