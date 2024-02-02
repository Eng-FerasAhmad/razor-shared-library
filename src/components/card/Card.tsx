import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import { CardProps } from './types';
import { CardContainer } from './styles';
import { shouldForwardProp } from '../../shared/common';

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
