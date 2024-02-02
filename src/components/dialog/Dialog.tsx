import { PropsWithChildren } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

import {
    DialogContainer,
    DialogContentWrapper,
    DialogHeaderWrapper,
    DialogTitleWrapper,
    DialogCloseWrapper,
} from './styles';

interface Props {
    open: boolean;
    title: string;
    handleClose: () => void;
}

export function Dialog({
    open,
    title,
    handleClose,
    children,
}: PropsWithChildren<Props>): JSX.Element {
    const stopPropagation = (event: React.SyntheticEvent): void => {
        event.stopPropagation();
    };

    if (!open) {
        return <></>;
    }

    return (
        <DialogContainer open={open} onClick={handleClose} data-testid="dialog">
            <DialogContentWrapper onClick={stopPropagation}>
                <DialogHeaderWrapper>
                    <DialogTitleWrapper>{title}</DialogTitleWrapper>
                    <DialogCloseWrapper>
                        <IoCloseSharp size={32} onClick={handleClose} />
                    </DialogCloseWrapper>
                </DialogHeaderWrapper>
                {children}
            </DialogContentWrapper>
        </DialogContainer>
    );
}
