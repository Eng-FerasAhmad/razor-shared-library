import { Meta, StoryObj } from '@storybook/react';

import { LanguageSwitch } from 'components/factory/language-switch/LanguageSwitch';

const languages = [
    { lang: 'DE', nativeName: 'Deutsch' },
    { lang: 'EN', nativeName: 'English' },
    { lang: 'FR', nativeName: 'French' },
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
        const handleSelect = (newSelectedLanguage: string) => {
            if (args.onSelect) {
                args.onSelect(newSelectedLanguage);
            }
        };

        return (
            <LanguageSwitch
                {...args}
                defaultLanguage={'DE'}
                onSelect={handleSelect}
                languages={languages}
            />
        );
    },
    args: {
        defaultLanguage: 'GB',
    },
};
