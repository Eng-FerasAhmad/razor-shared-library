import { ReactElement, useEffect, useRef, useState, useCallback } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { color } from 'shared/color';
import { StudioProps } from 'components/factory/studio/types';
import OptionItems from 'components/factory/studio/option-items/OptionItems';
import FullscreenView from 'components/factory/studio/fullscreen/Fullscreen';

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
    const [index, setIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const thumbnailRef = useRef<HTMLDivElement>(null);

    const totalSlides = props.media.length;

    useEffect(() => {
        setIndex(0);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    };

    const selectThumbnail = (i: number) => {
        setIndex(i);
    };

    const scrollToThumbnail = useCallback(() => {
        if (thumbnailRef.current) {
            const selectedThumbnail = thumbnailRef.current.children[
                index
            ] as HTMLElement;
            if (selectedThumbnail) {
                selectedThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
        }
    }, [index]);

    useEffect(() => {
        scrollToThumbnail();
    }, [scrollToThumbnail]);

    const prevThumbnails = () => {
        setIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
    };

    const nextThumbnails = () => {
        setIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    };

    const handleFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <CarouselWrapper>
                <OptionItems
                    infoButton={props.infoButton}
                    fullscreen={props.fullscreen}
                    onFullscreen={handleFullscreen}
                    info={props.media[index].alt}
                />
                <CarouselContainer data-testid="carousel-container">
                    <CarouselButton
                        onClick={prevSlide}
                        style={{ left: '10px' }}
                    >
                        <ChevronLeftIcon sx={{ fontSize: 32 }} />
                    </CarouselButton>

                    <ImageWrapper index={index}>
                        {props.media.map((img, i) => (
                            <Image key={i} src={img.url} alt={img.alt} />
                        ))}
                    </ImageWrapper>

                    <CarouselButton
                        onClick={nextSlide}
                        style={{ right: '10px' }}
                    >
                        <ChevronRightIcon sx={{ fontSize: 32 }} />
                    </CarouselButton>
                </CarouselContainer>

                <ThumbnailContainer>
                    <ThumbnailScrollButton onClick={prevThumbnails}>
                        <ChevronLeftIcon
                            sx={{ fontSize: 24, color: color.darkOpacity80 }}
                        />
                    </ThumbnailScrollButton>

                    <ThumbnailWrapper ref={thumbnailRef}>
                        {props.media.map((img, i) => (
                            <Thumbnail
                                key={i}
                                src={img.url}
                                alt={img.alt}
                                onClick={() => selectThumbnail(i)}
                                isSelected={index === i}
                            />
                        ))}
                    </ThumbnailWrapper>

                    <ThumbnailScrollButton onClick={nextThumbnails}>
                        <ChevronRightIcon
                            sx={{ fontSize: 24, color: color.darkOpacity80 }}
                        />
                    </ThumbnailScrollButton>
                </ThumbnailContainer>
            </CarouselWrapper>

            {isFullscreen && (
                <FullscreenView
                    imageSrc={props.media[index].url}
                    imageAlt={props.media[index].alt}
                    onClose={closeFullscreen}
                />
            )}
        </>
    );
}
