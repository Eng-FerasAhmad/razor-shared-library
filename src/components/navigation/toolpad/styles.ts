import { SxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { color } from 'shared/color';

export const selectedStyles: SxProps = {
    backgroundColor: `${color.hover} !important`,
    '&:hover': {
        backgroundColor: `${color.hover} !important`,
    },
};

export const drawerSx = (
    isOpen: boolean,
    width: number,
    collapsedWidth: number,
    top: number
): SxProps => ({
    '& .MuiDrawer-paper': {
        width: isOpen ? width : collapsedWidth,
        transition: 'width 0.3s',
        top,
        height: `calc(100vh - ${top}px)`,
        overflowX: 'hidden',
    },
});

export const groupTitleSx: SxProps = {
    padding: '2px 10px',
    display: 'block',
    color: 'text.secondary',
};

export const menuItemButtonSx = (
    selected: boolean,
    isOpen: boolean
): SxProps => ({
    position: 'relative',
    borderRadius: '8px',
    padding: isOpen ? '1px 8px' : 0,
    margin: isOpen ? '6px 0' : '3px 0',
    width: isOpen ? '100%' : '35px',
    ...(selected
        ? selectedStyles
        : {
              '&:hover': {
                  backgroundColor: color.hover,
              },
          }),
});

export const menuItemIconSx = (isOpen: boolean): SxProps => ({
    mr: isOpen ? 2 : 'auto',
    minWidth: isOpen ? 0 : '35px',
    width: isOpen ? 'auto' : '35px',
    height: isOpen ? 'auto' : '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const submenuItemSx = (selected: boolean): SxProps => ({
    pl: 4,
    borderRadius: '8px',
    padding: '3px 8px 3px 25px',
    margin: '5px 0',
    ...(selected
        ? selectedStyles
        : {
              '&:hover': {
                  backgroundColor: color.hover,
              },
          }),
});

export const popupItemSx = (selected: boolean): SxProps => ({
    padding: '10px 16px',
    backgroundColor: selected ? `${color.hover} !important` : 'transparent',
    '&:hover': {
        backgroundColor: `${color.hover} !important`,
    },
});

export const popupListItemTextSx: SxProps = {
    ml: 1,
};

export const MenuGroupContainer = styled('div')<{ isOpen: boolean }>(
    ({ isOpen }) => ({
        display: isOpen ? 'inherit' : 'flex',
        flexDirection: 'column',
        justifyContent: isOpen ? 'flex-start' : 'center',
        alignItems: isOpen ? 'flex-start' : 'center',
        margin: '8px',
    })
);
