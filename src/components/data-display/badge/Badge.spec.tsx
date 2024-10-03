import { BadgeCustom } from 'components/data-display/badge/Badge';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Badge />', () => {
    test('should render the component', () => {
        render(<BadgeCustom>badge</BadgeCustom>);

        expect(screen.getByTestId('badge')).toBeInTheDocument();
    });
});
