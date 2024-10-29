import { LanguageSwitch } from 'components/factory/language-switch/LanguageSwitch';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('LanguageSwitch', () => {
    const languages = [
        { lang: 'German', nativeName: 'DE' },
        { lang: 'English', nativeName: 'GB' },
        { lang: 'French', nativeName: 'FR' },
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
