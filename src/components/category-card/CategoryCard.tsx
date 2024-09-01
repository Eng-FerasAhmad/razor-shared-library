import { CategoryCardContainer } from './styles';
import { ReactElement } from 'react';

export function CategoryCard(): ReactElement {
    return (
        <CategoryCardContainer data-testid="category-card">
            <>category card</>
        </CategoryCardContainer>
    );
}
