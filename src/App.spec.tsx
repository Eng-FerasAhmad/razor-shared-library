import { render, screen } from 'src/test/test-utils';
import App from './App';

describe('<App />', () => {
    test('Should render the component', () => {
        render(<App />);

        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
