import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { InputBaseProps } from '@mui/material/InputBase';
interface Props {
    searchIcon: ReactNode;
    clearIcon: ReactNode;
    submitHandler: () => void;
    clearHandler: () => void;
}
export declare function SearchCustom({ searchIcon, clearIcon, submitHandler, clearHandler, ...props }: Props & InputBaseProps): ReactElement;
export {};
