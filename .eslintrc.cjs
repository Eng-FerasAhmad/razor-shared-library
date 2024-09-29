module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    settings: {
        react: { version: 'detect' },
        'import/resolver': { typescript: {} },
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
    ],
    plugins: [
        'react-refresh',
        'react',
        'react-hooks',
        '@typescript-eslint',
        'unused-imports',
        'import',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    ['parent', 'sibling', 'index'],
                    'internal',
                    'type',
                    'object',
                ],
                pathGroups: [
                    {
                        pattern: '@mui/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './*',
                        group: 'object',
                        position: 'after',
                    },
                    {
                        pattern: './styles.ts',
                        group: 'object',
                        position: 'after',
                    },
                    {
                        pattern: '@testing-library/*',
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
            },
        ],
    },
};
