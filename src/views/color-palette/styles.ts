import styled from 'styled-components';
import { color } from 'src/index';
import { pixelToRem } from 'src/shared/common';

export const ColorPaletteContainer = styled.div`
    margin: ${pixelToRem(50)};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid ${color.border};
    border-radius: ${pixelToRem(20)};
`;

export const ColorItemWrapper = styled.div`
    width: ${pixelToRem(150)};
    height: ${pixelToRem(60)};
    text-align: center;
    padding: ${pixelToRem(10)};
    box-sizing: border-box;
    margin: ${pixelToRem(10)};
`;
