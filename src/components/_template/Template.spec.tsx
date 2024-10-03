import { Template } from './Template';

import { render, screen } from '@testing-library/react';

describe('Template', () => {
    test('renders children within the ThemeProvider', () => {
        render(
            <Template>
                <span>Content inside Template</span>
            </Template>
        );

        expect(screen.getByText('Content inside Template')).toBeInTheDocument();
    });
});
