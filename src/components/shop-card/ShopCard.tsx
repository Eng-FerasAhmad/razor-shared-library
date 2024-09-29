import { ReactElement } from 'react';

import { ShopCardContainer } from './styles';

export function ShopCard(): ReactElement {
    return (
        <ShopCardContainer data-testid="shop-card">
            <>shop card</>
        </ShopCardContainer>
    );
}
