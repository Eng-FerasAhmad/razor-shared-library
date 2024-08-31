import { AutoCompleteCustom } from 'src/components/auto-complete/AutoComplete';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<AutoCompleteCustom />', () => {
    test('should render the component', () => {
        const option = { label: 'option1', value: 'opt1', icon: 'ico' };
        const changeHandlerSpy = jest.fn();
        render(
            <AutoCompleteCustom
                onChange={changeHandlerSpy}
                value={option}
                label="auto complete"
                options={[option]}
            />
        );

        expect(screen.getByTestId('auto-complete')).toBeInTheDocument();
    });
});
