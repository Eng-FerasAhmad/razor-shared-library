import { ReactElement, useState, useRef } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { color } from 'shared/color';
import { StudioProps } from 'components/factory/studio/types';

import {
    CarouselButton,
    CarouselContainer,
    Image,
    ImageWrapper,
    ThumbnailContainer,
    Thumbnail,
    ThumbnailWrapper,
    ThumbnailScrollButton,
    CarouselWrapper,
} from './styles';

export function MediaBarView(props: StudioProps): ReactElement {
    const [index, setIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [thumbIndex, setThumbIndex] = useState(0);

    const totalSlides = props.media.length;
    const visibleThumbnails = 8;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const carouselImages = [
        props.media[totalSlides - 1],
        ...props.media,
        props.media[0],
    ];

    const prevSlide = () => {
        if (index === 0) {
            setIsTransitioning(false);
            setIndex(totalSlides);
            setTimeout(() => {
                setIsTransitioning(true);
                setIndex(totalSlides - 1);
            }, 50);
        } else {
            setIndex((prev) => prev - 1);
        }
    };

    const nextSlide = () => {
        if (index === totalSlides) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(1);
            }, 500);
            setIndex(totalSlides + 1);
        } else {
            setIndex((prev) => prev + 1);
        }
        setIsTransitioning(true);
    };

    const selectThumbnail = (i: number) => {
        setIndex(i + 1);
    };

    const prevThumbnails = () => {
        setThumbIndex((prev) =>
            prev - 1 < 0 ? totalSlides - visibleThumbnails : prev - 1
        );
    };

    const nextThumbnails = () => {
        setThumbIndex((prev) =>
            prev + 1 > totalSlides - visibleThumbnails ? 0 : prev + 1
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 50) {
            nextThumbnails();
        } else if (deltaX < -50) {
            prevThumbnails();
        }
    };

    return (
        <CarouselWrapper>
            <CarouselContainer>
                <CarouselButton onClick={prevSlide} style={{ left: '10px' }}>
                    <ChevronLeftIcon sx={{ fontSize: 32 }} />
                </CarouselButton>

                <ImageWrapper index={index} isTransitioning={isTransitioning}>
                    {carouselImages.map((img, i) => (
                        <Image key={i} src={img.url} alt={img.alt} />
                    ))}
                </ImageWrapper>

                <CarouselButton onClick={nextSlide} style={{ right: '10px' }}>
                    <ChevronRightIcon sx={{ fontSize: 32 }} />
                </CarouselButton>
            </CarouselContainer>

            <ThumbnailContainer
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <ThumbnailScrollButton onClick={prevThumbnails}>
                    <ChevronLeftIcon
                        sx={{ fontSize: 24, color: color.darkOpacity80 }}
                    />
                </ThumbnailScrollButton>

                <ThumbnailWrapper>
                    {Array.from({ length: visibleThumbnails }).map((_, i) => {
                        const actualIndex = (thumbIndex + i) % totalSlides;
                        return (
                            <Thumbnail
                                key={actualIndex}
                                src={props.media[actualIndex].url}
                                alt={props.media[actualIndex].alt}
                                onClick={() => selectThumbnail(actualIndex)}
                                isSelected={index === actualIndex + 1}
                            />
                        );
                    })}
                </ThumbnailWrapper>

                <ThumbnailScrollButton onClick={nextThumbnails}>
                    <ChevronRightIcon
                        sx={{ fontSize: 24, color: color.darkOpacity80 }}
                    />
                </ThumbnailScrollButton>
            </ThumbnailContainer>
        </CarouselWrapper>
    );
}
