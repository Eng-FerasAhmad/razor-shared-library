import { ToolTipCustom } from './ToolTip';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<ToolTip />', () => {
    test('should render the component', () => {
        render(
            <ToolTipCustom title="tooltip">
                <div>text</div>
            </ToolTipCustom>
        );

        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    });
});
