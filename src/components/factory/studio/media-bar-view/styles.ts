import { styled } from '@mui/material/styles';

import { color } from 'shared/color';

export const CarouselWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '438px',
});

export const CarouselContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '340px',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '10px',
    background: '#000',
});

export const ImageWrapper = styled('div')<{
    index: number;
    isTransitioning: boolean;
}>(({ index, isTransitioning }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
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
    transition: 'background 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    maxWidth: '700px',
    height: '80px',
    position: 'relative',
    marginTop: '5px',
    overflow: 'hidden',
    background: '#fff',
    borderRadius: '10px',
    padding: '5px 0',
    border: `1px solid ${color.borderLight}`,
});

export const ThumbnailWrapper = styled('div')({
    display: 'flex',
    gap: '10px',
    overflow: 'hidden',
    width: 'calc(100% - 80px)',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
});

export const Thumbnail = styled('img')<{ isSelected: boolean }>(
    ({ isSelected }) => ({
        width: '65px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '10px',
        cursor: 'pointer',
        border: isSelected ? '1px solid #aaa' : '1px solid transparent',

        '&:hover': {
            border: '1px solid #aaa',
        },
    })
);

export const ThumbnailScrollButton = styled('button')({
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    borderRadius: '50%',
    '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
        transition: 'background 0.3s ease-in-out',
    },
});
