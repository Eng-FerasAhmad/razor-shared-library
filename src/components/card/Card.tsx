import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import { shouldForwardProp } from '../../shared/common';
import { CardContainer } from './styles';
import { CardProps } from './types';

export const Card = ({
    children,
    hoverColor,
}: PropsWithChildren<CardProps>): JSX.Element => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <CardContainer data-testid="card" hoverColor={hoverColor}>
                {children}
            </CardContainer>
        </StyleSheetManager>
    );
}
