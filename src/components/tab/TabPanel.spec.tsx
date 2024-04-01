import { render, screen } from 'src/test/test-utils';
import TabPanel from 'src/components/tab/TabPanel';

describe('<TabPanel />', () => {
    test('should render the component', () => {
        render(<TabPanel value={1}  index={1}>content</TabPanel>);

        expect(screen.getByTestId('tabpanel')).toBeInTheDocument();

    });
});
