import ConditionalRender from './ConditionalRender';

import { render, screen } from '@testing-library/react';

describe('ConditionalRender', () => {
    test('renders children when value is not null or undefined', () => {
        render(
            <ConditionalRender value={true}>
                <span>Content</span>
            </ConditionalRender>
        );

        // Assert that the children are rendered
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    test('does not render children when value is null', () => {
        const { container } = render(
            <ConditionalRender value={null}>
                <span>Content</span>
            </ConditionalRender>
        );

        // Assert that nothing is rendered
        expect(container.firstChild).toBeNull();
    });

    test('does not render children when value is undefined', () => {
        const { container } = render(
            <ConditionalRender value={undefined}>
                <span>Content</span>
            </ConditionalRender>
        );

        // Assert that nothing is rendered
        expect(container.firstChild).toBeNull();
    });
});
