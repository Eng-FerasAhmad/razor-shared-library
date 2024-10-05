import { Link } from '@mui/material';

import { BreadcrumbsCustom } from 'components/navigation/breadcrumbs/Breadcrumbs';

import { render, screen } from '@testing-library/react';

describe('BreadcrumbsCustom Component', () => {
    it('should render the breadcrumbs passed as props', () => {
        const breadcrumbs = [
            <Link key="1" href="/">
                Home
            </Link>,
            <Link key="2" href="/category">
                Category
            </Link>,
            <Link key="3" href="/category/item" aria-current="page">
                Item
            </Link>,
        ];

        render(<BreadcrumbsCustom breadcrumbs={breadcrumbs} />);

        // Check if the breadcrumbs are rendered
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Category')).toBeInTheDocument();
        expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('should render the NavigateNext separator between breadcrumbs', () => {
        const breadcrumbs = [
            <Link key="1" href="/">
                Home
            </Link>,
            <Link key="2" href="/category">
                Category
            </Link>,
            <Link key="3" href="/category/item" aria-current="page">
                Item
            </Link>,
        ];

        render(<BreadcrumbsCustom breadcrumbs={breadcrumbs} />);

        // Check if the NavigateNext separator is rendered
        expect(screen.getAllByTestId('NavigateNextIcon').length).toBe(2); // Should have two separators between three items
    });

    it('should set the aria-label as "breadcrumb"', () => {
        const breadcrumbs = [
            <Link key="1" href="/">
                Home
            </Link>,
        ];

        render(<BreadcrumbsCustom breadcrumbs={breadcrumbs} />);

        // Check if the Breadcrumbs component has the correct aria-label
        const breadcrumbElement = screen.getByLabelText('breadcrumb');
        expect(breadcrumbElement).toBeInTheDocument();
    });
});
