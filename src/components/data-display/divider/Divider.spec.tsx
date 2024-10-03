import { DividerCustom } from 'components/data-display/divider/Divider';

import { render } from '@testing-library/react';

describe('DividerCustom', () => {
    test('renders Divider inside Template', () => {
        const { container } = render(<DividerCustom />);

        expect(container.querySelector('.MuiDivider-root')).toBeInTheDocument();
    });
});
