import { styled } from '@mui/material/styles';

export const CarouselContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '438px',
    overflow: 'hidden',
    position: 'relative',
    aspectRatio: '16/9',
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
    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', // ✅ Transition only disabled when resetting
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
    background: 'rgba(0, 0, 0, 0.3)', // Light dark background
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

    '& svg': {
        transition: 'background 0.3s ease-in-out',
    },
});
