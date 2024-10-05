import { LinkCustom } from 'components/navigation/link/Link';

import { render, screen } from '@testing-library/react';

describe('LinkCustom Component', () => {
    it('should render the link with the correct text', () => {
        const text = 'Click Here';
        render(<LinkCustom text={text} />);

        const linkElement = screen.getByRole('link', { name: text });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '#');
    });

    it('should have the underline style set to hover', () => {
        const text = 'Hover Over Me';
        render(<LinkCustom text={text} />);

        const linkElement = screen.getByRole('link', { name: text });
        expect(linkElement).toHaveStyle('text-decoration: underline');
    });
});
