import TabPanel from 'src/components/tab/TabPanel';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<TabPanel />', () => {
    test('should render the component', () => {
        render(
            <TabPanel value={1} index={1}>
                content
            </TabPanel>
        );

        expect(screen.getByTestId('tabpanel')).toBeInTheDocument();
    });
});
