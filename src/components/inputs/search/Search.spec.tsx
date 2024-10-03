import { SearchCustom } from 'components/inputs/search/Search';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('SearchCustom', () => {
    const mockSubmitHandler = jest.fn();
    const mockClearHandler = jest.fn();

    beforeEach(() => {
        render(
            <SearchCustom
                searchIcon={<span>Search</span>}
                clearIcon={<span>Clear</span>}
                submitHandler={mockSubmitHandler}
                clearHandler={mockClearHandler}
            />
        );
    });

    it('calls clearHandler when clear icon is clicked', () => {
        const clearButton = screen.getByText('Clear').closest('button');
        fireEvent.click(clearButton!);
        expect(mockClearHandler).toHaveBeenCalledTimes(1);
    });

    it('calls submitHandler when search icon is clicked', () => {
        const searchButton = screen.getByText('Search').closest('button');
        fireEvent.click(searchButton!);
        expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    });
});
