import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaperCustom } from 'components/paper/Paper';

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
