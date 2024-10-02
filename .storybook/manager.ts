import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const lightTheme = create({
    base: 'light',
    brandTitle: 'Razor Shared Library',
    brandUrl: 'https://github.com/Eng-FerasAhmad/razor-shared-library',
    colorPrimary: '#2ba172',
    colorSecondary: '#2ba172',
    brandImage: '/public/razor-admin-logo.svg',
});

const darkTheme = create({
    base: 'dark',
    brandTitle: 'Razor Shared Library',
    brandUrl: 'https://github.com/Eng-FerasAhmad/razor-shared-library',
    brandImage: '/public/razor-admin-logo.svg',
    colorPrimary: '#2ba172',
    colorSecondary: '#2ba172',
    appBg: '#333',
    appContentBg: '#1c1c1c',
    appBorderColor: '#666',
    textColor: 'white',
    barTextColor: '#999',
    barSelectedColor: '#fff',
    barBg: '#1c1c1c',
});

addons.setConfig({
    theme: darkTheme,
    darkMode: {
        dark: darkTheme,
        light: lightTheme,
        current: 'dark',
    },
});
