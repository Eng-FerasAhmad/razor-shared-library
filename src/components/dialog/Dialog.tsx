import { PropsWithChildren } from 'react';

import {
    DialogCloseWrapper,
    DialogContainer,
    DialogContentWrapper,
    DialogHeaderWrapper,
    DialogTitleWrapper,
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
            <DialogContentWrapper
                onClick={stopPropagation}
                data-testid="dialog-content"
            >
                <DialogHeaderWrapper>
                    <DialogTitleWrapper>{title}</DialogTitleWrapper>
                    <DialogCloseWrapper>
                        <>icon</>
                    </DialogCloseWrapper>
                </DialogHeaderWrapper>
                {children}
            </DialogContentWrapper>
        </DialogContainer>
    );
}
