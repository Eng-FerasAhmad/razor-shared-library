import { render, screen } from 'src/test/test-utils';
import {AutoCompleteCustom} from 'src/components/auto-complete/AutoComplete';

describe('<AutoCompleteCustom />', () => {
    test('should render the component', () => {
        const option = { label: 'option1', value: 'opt1', icon: 'ico' };
        render(<AutoCompleteCustom onChange={jest.fn()} value={option} label='auto complete' options={[option]} />);

        expect(screen.getByTestId('auto-complete')).toBeInTheDocument();
    });
});
