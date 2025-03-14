import { ReactElement } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { CloseButton, FullscreenImage, FullscreenOverlay } from './styles';

interface FullscreenViewProps {
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
}

export default function FullscreenView({
    imageSrc,
    imageAlt,
    onClose,
}: FullscreenViewProps): ReactElement {
    return (
        <FullscreenOverlay>
            <CloseButton onClick={onClose}>
                <CloseIcon sx={{ fontSize: 32, color: 'white' }} />
            </CloseButton>
            <FullscreenImage src={imageSrc} alt={imageAlt} />
        </FullscreenOverlay>
    );
}
