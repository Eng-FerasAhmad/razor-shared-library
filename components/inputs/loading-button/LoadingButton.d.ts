import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { ButtonProps } from '@mui/material/Button';
interface Props {
    label: string;
    startIcon: ReactNode;
    loading: boolean;
}
export declare function LoadingButtonCustom({ label, startIcon, loading, ...props }: ButtonProps & Props): ReactElement;
export {};
