import { render, screen } from '@testing-library/react';
import { FloatButton } from './FloatButton';

describe('FloatButton', () => {
    const icon = <span>Icon</span>;

    it('renders the FloatButton with the correct icon', () => {
        render(<FloatButton icon={icon} />);
        expect(screen.getByText('Icon')).toBeInTheDocument();
    });
});
