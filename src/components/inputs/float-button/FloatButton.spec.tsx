import { FloatButton } from './FloatButton';

import { render, screen } from '@testing-library/react';

describe('FloatButton', () => {
    const icon = <span>Icon</span>;

    it('renders the FloatButton with the correct icon', () => {
        render(<FloatButton icon={icon} />);
        expect(screen.getByText('Icon')).toBeInTheDocument();
    });
});
