import styled from 'styled-components';

import { CardProps } from '..';
import { color } from '../../shared/color';
import { pixelToRem } from '../../shared/common';

const getShadowColor = (props: CardProps) => {
    return props.hoverColor || color.customGray;
};

export const CardContainer = styled.div<CardProps>`
    width: 100%;
    height: 100%;
    background-color: ${color.light};
    box-shadow:
        0 2px 10px 0 ${color.customGray},
        0 3px 40px 0 ${color.customGray};
    border-radius: ${pixelToRem(5)};
    padding: ${pixelToRem(20)};
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
        box-shadow:
            0 2px 10px 0 ${getShadowColor},
            0 3px 40px 0 ${getShadowColor};
    }
`;
