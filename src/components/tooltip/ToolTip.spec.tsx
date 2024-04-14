import { render, screen } from 'src/test/test-utils';
import { ToolTipCustom } from './ToolTip';

describe('<ToolTip />', () => {
    test('should render the component', () => {
        render(
            <ToolTipCustom title='tooltip'
            >
                <div>text</div>
            </ToolTipCustom>
        );

        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    });
});
