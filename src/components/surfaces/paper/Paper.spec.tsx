import { PaperCustom } from 'components/surfaces/paper/Paper';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('PaperCustom', () => {
    it('renders children correctly', () => {
        render(<PaperCustom>Test Content</PaperCustom>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders with default props', () => {
        render(<PaperCustom>Default Paper</PaperCustom>);
        const paperElement = screen.getByText('Default Paper').parentElement;
        expect(paperElement).toBeInTheDocument();
    });
});
