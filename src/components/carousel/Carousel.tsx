import { ReactElement } from 'react';

import { CarouselContainer } from './styles';

export function Carousel(): ReactElement {
    return (
        <CarouselContainer data-testid="carousel">
            <>carousel</>
        </CarouselContainer>
    );
}
