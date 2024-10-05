import { ReactElement } from '../../../../node_modules/react';
import { SwitchProps } from '@mui/material/Switch';
import { StandardLabelPlacement } from '../../../../../../../../src/shared/types';
interface Props {
    label?: string;
    labelPlacement?: StandardLabelPlacement;
}
export declare function SwitchCustom({ label, labelPlacement, ...props }: Props & SwitchProps): ReactElement;
export {};
