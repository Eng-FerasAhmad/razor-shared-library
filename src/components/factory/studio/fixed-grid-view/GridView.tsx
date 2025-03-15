import { ReactElement, useEffect, useRef, useState, useCallback } from 'react';

import { Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StudioProps } from 'components/factory/studio/types';

import {
    GridContainer,
    FixedGridContainer,
    GridItem,
    ButtonContainer,
    ActionButton,
    StyledDialogContent,
    CloseButton,
    EnlargedImage,
} from './styles';

export function GridView(props: StudioProps): ReactElement {
    const [visibleCount, setVisibleCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemsPerLoad, setItemsPerLoad] = useState(0);

    const updateVisibleCount = useCallback(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            const itemWidth = 105 + 8; // Image width + gap
            const itemHeight = 85 + 8; // Image height + gap

            const columns = Math.floor(containerWidth / itemWidth);
            const rows = Math.floor(containerHeight / itemHeight);
            const count = columns * rows;

            setItemsPerLoad(count);
            setVisibleCount(count);
        }
    }, []);

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, [updateVisibleCount]);

    const handleShowMore = () => {
        setVisibleCount((prev) => {
            const newCount = prev + itemsPerLoad;
            setTimeout(() => {
                if (gridRef.current) {
                    gridRef.current.scrollTo({
                        top: gridRef.current.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            }, 100);
            return newCount;
        });
    };

    const handleOpenDialog = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseDialog = () => {
        setSelectedImage(null);
    };

    const visibleImages = props.media.slice(0, visibleCount);
    const hasMoreImages = visibleImages.length < props.media.length;

    return (
        <>
            <GridContainer ref={containerRef}>
                <FixedGridContainer ref={gridRef}>
                    {visibleImages.map((img) => (
                        <GridItem
                            key={img.url}
                            src={img.url}
                            alt={img.alt}
                            onClick={() => handleOpenDialog(img.url)}
                        />
                    ))}
                </FixedGridContainer>
                {hasMoreImages && (
                    <ButtonContainer>
                        <ActionButton onClick={handleShowMore}>
                            {props.buttonMore}
                        </ActionButton>
                    </ButtonContainer>
                )}
            </GridContainer>

            <Dialog
                open={!!selectedImage}
                onClose={handleCloseDialog}
                maxWidth="md"
            >
                <StyledDialogContent>
                    <CloseButton onClick={handleCloseDialog}>
                        <CloseIcon />
                    </CloseButton>
                    {selectedImage && (
                        <EnlargedImage src={selectedImage} alt="Enlarged" />
                    )}
                </StyledDialogContent>
            </Dialog>
        </>
    );
}
