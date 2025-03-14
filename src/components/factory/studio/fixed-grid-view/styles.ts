import { styled } from '@mui/material/styles';

import { color } from 'shared/color';

export const GridContainer = styled('div')({
    width: '700px',
    height: '438px',
    borderRadius: '10px',
    border: `1px solid ${color.borderLight}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
    padding: '0 10px',
});

export const FixedGridContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '8px',
    maxWidth: '100%',
    width: '100%',
    maxHeight: '370px',
    overflowY: 'auto',
    padding: '10px',
});

export const GridItem = styled('img')({
    width: '105px',
    height: '85px',
    objectFit: 'cover',
    borderRadius: '4px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.06)',
        cursor: 'pointer',
    },
});

export const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    position: 'absolute',
    bottom: '10px',
    width: '100%',
});

export const ActionButton = styled('button')({
    color: color.secondary.dark,
    border: `1px solid ${color.borderLight}`,
    padding: '6px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: color.borderLight,
    },
    '&:disabled': {
        color: color.secondary.light,
        backgroundColor: color.borderLight,
        cursor: 'auto',
    },
});
