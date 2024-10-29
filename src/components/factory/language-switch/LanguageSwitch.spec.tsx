import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { LanguageSwitch } from './LanguageSwitch';

describe('LanguageSwitch', () => {
    const languages = [
        { name: 'German', short: 'DE' },
        { name: 'English', short: 'GB' },
        { name: 'French', short: 'FR' },
    ];
    const defaultLanguage = 'GB';
    const onSelect = jest.fn();

    beforeEach(() => {
        onSelect.mockClear();
    });

    test('renders with the default language', () => {
        render(
            <LanguageSwitch
                languages={languages}
                defaultLanguage={defaultLanguage}
                onSelect={onSelect}
            />
        );

        expect(screen.getByText('🇬🇧')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
    });
});
