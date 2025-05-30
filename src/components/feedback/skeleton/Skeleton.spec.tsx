import { SkeletonCustom } from './Skeleton';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Skeleton />', () => {
    test('should render the component', () => {
        render(<SkeletonCustom />);

        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });
});
