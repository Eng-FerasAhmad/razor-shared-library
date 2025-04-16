import { DateTime } from 'luxon';
import { ChangeEvent, ReactElement } from '../../../../node_modules/react';
import { FormDataSet } from '../../../../../../../../src/components/factory/form-creator/types';
interface UseFormControllerProps {
    item: FormDataSet;
    index: number;
    updateDataForm: (index: number, value: string | number | boolean | DateTime) => void;
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
    submit?: boolean;
}
export declare function FormInputFactory({ item, index, updateDataForm, handleInputChange, submit, }: UseFormControllerProps): ReactElement | null;
export {};
