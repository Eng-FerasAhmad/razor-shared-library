import styled from 'styled-components';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize } from 'src/shared/fonts';

export const DialogContainer = styled.dialog`
    background-color: ${color.darkOpacity80};
    transition: all 0.3s ease-in-out;
    color: ${color.fontDark};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 0;
    margin: 0;
    border: none;
`;

export const DialogContentWrapper = styled.div`
    width: fit-content;
    background-color: ${color.light};
    border-radius: ${pixelToRem(0)};
    position: relative;
    padding: ${pixelToRem(24)};
`;

export const DialogHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${pixelToRem(24)};
    min-width: ${pixelToRem(500)};
    width: fit-content;
`;

export const DialogTitleWrapper = styled.div`
    font-size: ${pixelToRem(fontSize.font24)};
    margin: auto 0;
    font-weight: 500;
`;

export const DialogCloseWrapper = styled.div`
    cursor: pointer;
`;
