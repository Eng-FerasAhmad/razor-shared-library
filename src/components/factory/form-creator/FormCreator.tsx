import { Dayjs } from 'dayjs';
import {
    ChangeEvent,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react';

import Box from '@mui/material/Box';

import { FormDataSet } from 'components/factory/form-creator/types';
import { FormInputFactory } from 'components/factory/form-creator/FormInputFactory';
import ConditionalRender from 'components/_conditional-render/ConditionalRender';

interface Props {
    formDataSet: FormDataSet[];
    onUpdateFrom: (formData: FormDataSet[]) => void;
    submit?: boolean;
}

export function FormCreator({
    formDataSet,
    onUpdateFrom,
    submit,
}: Props): ReactElement {
    const [formData, setFormData] = useState<FormDataSet[]>(formDataSet);

    useEffect(() => {
        setFormData([...formDataSet]);
    }, [formDataSet]);

    const updateDataForm = useCallback(
        (index: number, value: string | number | boolean | Dayjs) => {
            const updatedFormData = formData.map((item, i) =>
                i === index ? { ...item, value } : item
            );
            setFormData(updatedFormData);
            onUpdateFrom(updatedFormData);
        },
        [formData, onUpdateFrom]
    );

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ): void => {
        const target = e.target as HTMLInputElement;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        updateDataForm(index, value);
    };

    return (
        <ConditionalRender value={formData}>
            {formData.map((item, index) => (
                <Box key={index} sx={{ mt: index > 0 ? 3 : 0 }}>
                    <FormInputFactory
                        item={item}
                        index={index}
                        updateDataForm={updateDataForm}
                        handleInputChange={handleInputChange}
                        submit={submit}
                    />
                </Box>
            ))}
        </ConditionalRender>
    );
}
