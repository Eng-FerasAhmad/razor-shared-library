import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
    base: 'dark',
    brandTitle: 'Razor Shared Library',
    brandUrl: 'https://github.com/Eng-FerasAhmad/razor-shared-library',
    brandImage: './logo.svg',
    colorPrimary: '#2ba172',
    colorSecondary: '#2ba172',
    appBg: '#333',
    appContentBg: '#1c1c1c',
    barBg: '#1c1c1c',
    barTextColor: '#ffffff',
    barSelectedColor: '#2ba172',
});

addons.setConfig({
    theme: theme,
});
