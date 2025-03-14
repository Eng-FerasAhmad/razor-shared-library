import { ReactElement, useRef, useState } from 'react';

import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StudioProps } from 'components/factory/studio/types';

import {
    GridContainer,
    FixedGridContainer,
    GridItem,
    ButtonContainer,
    ActionButton,
} from './styles';

const INITIAL_ROWS = 4;
const ROW_INCREMENT = 4;
const IMAGES_PER_ROW = 6;

export function GridView(props: StudioProps): ReactElement {
    const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const handleShowMore = () => {
        setVisibleRows((prev) => {
            const newRowCount = prev + ROW_INCREMENT;

            setTimeout(() => {
                if (gridRef.current) {
                    gridRef.current.scrollTo({
                        top: gridRef.current.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            }, 100);

            return newRowCount;
        });
    };

    const handleReset = () => {
        setVisibleRows(INITIAL_ROWS);
        if (gridRef.current) {
            gridRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleOpenDialog = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseDialog = () => {
        setSelectedImage(null);
    };

    const visibleImages = props.media.slice(0, visibleRows * IMAGES_PER_ROW);
    const hasMoreImages = visibleImages.length < props.media.length;
    const isResetDisabled = visibleRows === INITIAL_ROWS;

    return (
        <>
            <GridContainer>
                <FixedGridContainer ref={gridRef}>
                    {visibleImages.map((img) => (
                        <GridItem
                            key={img.url}
                            src={img.url}
                            alt={img.alt}
                            onClick={() => handleOpenDialog(img.url)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </FixedGridContainer>
                <ButtonContainer>
                    <ActionButton
                        sx={{ width: 120 }}
                        onClick={handleShowMore}
                        disabled={!hasMoreImages}
                    >
                        {props.buttonMore}
                    </ActionButton>

                    <ActionButton
                        sx={{ width: 120 }}
                        onClick={handleReset}
                        disabled={isResetDisabled}
                    >
                        {props.buttonReset}
                    </ActionButton>
                </ButtonContainer>
            </GridContainer>

            {/* Dialog to show enlarged image */}
            <Dialog
                open={!!selectedImage}
                onClose={handleCloseDialog}
                maxWidth="md"
            >
                <DialogContent style={{ position: 'relative', padding: 0 }}>
                    <IconButton
                        onClick={handleCloseDialog}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '90vh',
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
