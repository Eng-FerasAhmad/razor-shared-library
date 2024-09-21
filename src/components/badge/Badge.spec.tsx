import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BadgeCustom } from 'components/badge/Badge';

describe('<Badge />', () => {
    test('should render the component', () => {
        render(<BadgeCustom>badge</BadgeCustom>);

        expect(screen.getByTestId('badge')).toBeInTheDocument();
    });
});
