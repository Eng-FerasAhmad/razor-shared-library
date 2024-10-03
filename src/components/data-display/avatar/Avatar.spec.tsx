import { AvatarCustom } from 'components/data-display/avatar/Avatar';

import { render, screen } from '@testing-library/react';

describe('AvatarCustom', () => {
    test('renders Avatar inside Template', () => {
        render(<AvatarCustom alt="Test Avatar" src="/test.jpg" />);

        expect(screen.getByAltText('Test Avatar')).toBeInTheDocument();
    });
});
