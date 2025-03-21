import { ReactElement, useState } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
    CarouselButton,
    CarouselContainer,
    Image,
    ImageWrapper,
} from 'components/factory/studio/carousel-view/styles';
import { StudioProps } from 'components/factory/studio/types';
import OptionItems from 'components/factory/studio/option-items/OptionItems';
import FullscreenView from 'components/factory/studio/fullscreen/Fullscreen';

export function CarouselView(props: StudioProps): ReactElement {
    const [index, setIndex] = useState(1); // Start at first clone
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const totalSlides = props.media.length;

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

    const handleFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <CarouselContainer>
                <OptionItems
                    infoButton={props.infoButton}
                    fullscreen={props.fullscreen}
                    onFullscreen={handleFullscreen}
                    info={carouselImages[index].alt}
                />
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

            {isFullscreen && (
                <FullscreenView
                    imageSrc={carouselImages[index].url}
                    imageAlt={carouselImages[index].alt}
                    onClose={closeFullscreen}
                />
            )}
        </>
    );
}
