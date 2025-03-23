import { SxProps } from '@mui/material';

import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';

export const getRowStyle = (isSelected: boolean): SxProps => ({
    backgroundColor: isSelected ? color.hover : '',
    cursor: 'pointer',
    ':hover': { backgroundColor: color.hover },
    '&:last-child td, &:last-child th': { border: 0 },
});

export const autoIdCell: SxProps = {
    padding: pixelToRem(10, 16),
};

export const actionBox: SxProps = {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': { backgroundColor: '#e6e6e6' },
};

export const menuIcon: SxProps = {
    marginRight: 1,
};
