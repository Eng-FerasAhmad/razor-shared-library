import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    'Colors',
                    'Typography',
                    'Inputs',
                    'Data Display',
                    'Feedback',
                    'Surfaces',
                    'Navigation',
                    'Layout',
                    'Datepicker',
                    'Factory',
                    'Utils',
                ],
            },
        },
    },
};

export default preview;
