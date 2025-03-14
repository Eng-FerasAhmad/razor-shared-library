import { styled } from '@mui/material/styles';

export const FullscreenOverlay = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
});

export const FullscreenImage = styled('img')({
    borderRadius: '10px',
});

export const CloseButton = styled('button')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease-in-out',

    '&:hover': {
        background: 'rgba(255, 255, 255, 0.2)',
    },
});
