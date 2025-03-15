import { styled } from '@mui/material/styles';

import { color } from 'shared/color';

export const CarouselWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '438px',
    width: '100%',
});

export const CarouselContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxHeight: '340px',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '10px',
    background: '#000',
});

export const ImageWrapper = styled('div')<{
    index: number;
}>(({ index }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${index * 100}%)`,
}));

export const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    flexShrink: 0,
});

export const CarouselButton = styled('button')({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    zIndex: 10,

    '&:hover': {
        background: 'rgba(0, 0, 0, 0.7)',
    },
});

export const ThumbnailContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80px',
    position: 'relative',
    marginTop: '5px',
    overflowX: 'auto',
    background: '#fff',
    borderRadius: '10px',
    padding: '5px 0',
    border: `1px solid ${color.borderLight}`,
});

export const ThumbnailWrapper = styled('div')({
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
    alignItems: 'center',

    '&::-webkit-scrollbar': {
        display: 'none',
    },
});

export const Thumbnail = styled('img')<{ isSelected: boolean }>(
    ({ isSelected }) => ({
        width: isSelected ? '80px' : '55px',
        height: isSelected ? '70px' : '50px',
        objectFit: 'cover',
        borderRadius: '10px',
        cursor: 'pointer',
        transition:
            'width 0.5s ease-in-out, height 0.5s ease-in-out, transform 0.5s ease-in-out',
        filter: !isSelected ? 'brightness(0.6)' : 'brightness(1)',
    })
);

export const ThumbnailScrollButton = styled('button')({
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    background: 'transparent',
    borderRadius: '50%',
});
