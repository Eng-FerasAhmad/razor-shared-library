import { ChipCustom } from 'components/chip/Chip';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Chip />', () => {
    test('should render the component', () => {
        render(<ChipCustom label={'Chip'} />);

        expect(screen.getByTestId('chip')).toBeInTheDocument();
    });
});
