import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LanguageSwitch } from 'components/factory/language-switch/LanguageSwitch';

const languages = [
    { lang: 'German', nativeName: 'DE' },
    { lang: 'English', nativeName: 'GB' },
    { lang: 'French', nativeName: 'FR' },
];

const meta: Meta<typeof LanguageSwitch> = {
    title: 'Factory/LanguageSwitch',
    component: LanguageSwitch,
    argTypes: {
        defaultLanguage: {
            control: 'select',
            options: languages.map((lang) => lang.lang),
        },
        onSelect: { action: 'selected' },
    },
};

export default meta;

type Story = StoryObj<typeof LanguageSwitch>;

export const Default: Story = {
    render: (args) => {
        const [selectedLanguage, setSelectedLanguage] = useState(
            args.defaultLanguage
        );

        const handleSelect = (newSelectedLanguage: string) => {
            setSelectedLanguage(newSelectedLanguage);
            if (args.onSelect) {
                args.onSelect(newSelectedLanguage);
            }
        };

        return (
            <LanguageSwitch
                {...args}
                defaultLanguage={selectedLanguage}
                onSelect={handleSelect}
                languages={languages}
            />
        );
    },
    args: {
        defaultLanguage: 'GB',
    },
};
