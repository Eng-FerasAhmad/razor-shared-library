import { PaginationCustom } from 'components/navigation/pagination/Pagination';

import { render, screen } from '@testing-library/react';

describe('PaginationCustom Component', () => {
    it('should render the pagination with the correct number of pages', () => {
        const onChange = jest.fn();
        const count = 5;

        render(<PaginationCustom count={count} onChange={onChange} />);

        const paginationItems = screen.getAllByRole('button');
        expect(paginationItems).toHaveLength(7);
    });
});
