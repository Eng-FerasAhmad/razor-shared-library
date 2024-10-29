import { Meta, StoryObj } from '@storybook/react';

import { LanguageSwitch } from 'components/factory/language-switch/LanguageSwitch';

const languages = [
    { lang: 'de', nativeName: 'Deutsch' },
    { lang: 'en', nativeName: 'English' },
    { lang: 'fr', nativeName: 'Française' },
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
        return (
            <LanguageSwitch
                {...args}
                defaultLanguage={args.defaultLanguage}
                onSelect={(newSelectedLanguage: string) => {
                    if (args.onSelect) {
                        args.onSelect(newSelectedLanguage);
                    }
                }}
                languages={languages}
            />
        );
    },
    args: {
        defaultLanguage: 'en',
    },
};
