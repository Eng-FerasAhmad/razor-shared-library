import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LanguageSwitch } from 'components/factory/language-switch/LanguageSwitch';

const languages = [
    { name: 'German', short: 'DE' },
    { name: 'English', short: 'GB' },
    { name: 'French', short: 'FR' },
];

const meta: Meta<typeof LanguageSwitch> = {
    title: 'Factory/LanguageSwitch',
    component: LanguageSwitch,
    argTypes: {
        defaultLanguage: {
            control: 'select',
            options: languages.map((lang) => lang.short),
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
