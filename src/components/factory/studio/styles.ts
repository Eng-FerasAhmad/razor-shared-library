import { styled } from '@mui/material/styles';

export const StudioContainer = styled('div')({
    width: '100%',
    maxWidth: '700px',
    maxHeight: '500px',
    margin: 'auto',
    borderRadius: '10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const StudioHeader = styled('div')({
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '3px 5px',
    borderRadius: '30px',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
});

export const ViewButton = styled('button')<{ active: boolean }>(
    ({ active }) => ({
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        fontSize: '14px',
        background: active ? '#1976d2' : 'transparent',
        color: active ? '#fff' : '#fff',
        transition: 'all 0.3s ease-in-out',
        opacity: active ? 1 : 0.6,

        '&:hover': {
            opacity: 1,
            background: 'rgba(255, 255, 255, 0.2)', // Light glow on hover
        },
    })
);

export const StudioInfo = styled('div')({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});
