import { ReactElement } from 'react';

import { CategoryCardContainer } from './styles';

export function CategoryCard(): ReactElement {
    return (
        <CategoryCardContainer data-testid="category-card">
            <>category card</>
        </CategoryCardContainer>
    );
}
