import { Dayjs } from 'dayjs';
import { ChangeEvent, ReactElement } from '../../../../node_modules/react';
import { FormDataSet } from '../../../../../../../../src/components/factory/form-creator/types';
interface UseFormControllerProps {
    item: FormDataSet;
    index: number;
    updateDataForm: (index: number, value: string | number | boolean | Dayjs) => void;
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
}
export declare function FormInputFactory({ item, index, updateDataForm, handleInputChange, }: UseFormControllerProps): ReactElement | null;
export {};
