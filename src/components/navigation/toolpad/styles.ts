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
    top: number,
    backgroundColor?: string,
    fontColor?: string
): SxProps => ({
    '& .MuiDrawer-paper': {
        width: isOpen ? width : collapsedWidth,
        transition: 'width 0.3s',
        top,
        height: `calc(100vh - ${top}px)`,
        overflowX: 'hidden',
        backgroundColor: backgroundColor,
        color: fontColor,
    },
});

export const groupTitleSx: SxProps = {
    padding: '2px 10px',
    display: 'block',
};

export const menuItemButtonSx = (
    selected: boolean,
    isOpen: boolean,
    selectedColor: string
): SxProps => ({
    position: 'relative',
    borderRadius: '8px',
    padding: isOpen ? '1px 8px' : 0,
    margin: isOpen ? '6px 0' : '3px 0',
    width: isOpen ? '100%' : '35px',
    ...(selected
        ? {
              backgroundColor: `${selectedColor} !important`,
              '&:hover': {
                  backgroundColor: `${selectedColor} !important`,
              },
          }
        : {
              '&:hover': {
                  backgroundColor: `${selectedColor} !important`,
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
    marginRight: '10px',
});

export const submenuItemSx = (
    selected: boolean,
    selectedColor: string
): SxProps => ({
    pl: 4,
    borderRadius: '8px',
    padding: '3px 8px 3px 25px',
    margin: '5px 0',
    ...(selected
        ? {
              backgroundColor: `${selectedColor} !important`,
              '&:hover': {
                  backgroundColor: `${selectedColor} !important`,
              },
          }
        : {
              '&:hover': {
                  backgroundColor: `${selectedColor} !important`,
              },
          }),
});

export const popupItemSx = (
    selected: boolean,
    selectedColor: string
): SxProps => ({
    padding: '10px 16px',
    backgroundColor: selected ? `${selectedColor} !important` : 'transparent',
    '&:hover': {
        backgroundColor: `${selectedColor} !important`,
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
