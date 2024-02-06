import styled from 'styled-components';
import { pixelToRem } from 'src/shared/common';

export const ButtonPaletteContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonLGContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${pixelToRem(200)};
    margin-right: ${pixelToRem(30)};
    button {
        margin: ${pixelToRem(10)};
    }
`;
