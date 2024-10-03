import { LinearProgressCustom } from 'components/feedback/progress-linear/LinearProgress';

import { render, screen } from '@testing-library/react';

describe('LinearProgressCustom', () => {
    test('renders LinearProgress with default color', () => {
        render(<LinearProgressCustom />);

        const linearProgress = screen.getByRole('progressbar');
        expect(linearProgress).toBeInTheDocument();
    });
});
