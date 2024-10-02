import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
    base: 'dark',
    brandTitle: 'Razor Shared Library',
    brandUrl: 'https://github.com/Eng-FerasAhmad/razor-shared-library',
    brandImage: '/razor-admin-logo.svg', // Ensure this path is correct
    colorPrimary: '#2ba172',
    colorSecondary: '#2ba172',
    appBg: '#333', // Background color for the app
    appContentBg: '#1c1c1c', // Content background color
    barBg: '#1c1c1c', // Background color for the sidebar
    barTextColor: '#ffffff', // Text color for icons in the sidebar
    barSelectedColor: '#2ba172', // Color when an item is selected
});

addons.setConfig({
    theme: theme,
});
