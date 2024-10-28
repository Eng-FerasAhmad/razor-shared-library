import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    moduleDirectories: ['node_modules', 'src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    automock: false,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|svg|ttf|woof|woof2)$':
            '<rootDir>/__mocks__/file-mock.ts',
        'src/(.*)': '<rootDir>/src/$1',
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/jest-reports',
    coverageReporters: ['json-summary', 'lcov', ['text', { skipFull: true }]],
    setupFilesAfterEnv: [
        '<rootDir>/src/test/setupTests.ts',
        'jest-canvas-mock',
    ],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 85,
            lines: 85,
            statements: 85,
        },
    },
    testRegex: 'spec\\.(ts|tsx)?$',
    testEnvironmentOptions: { url: 'https://url.mock' },
    globals: {
        API_DOMAIN: '/',
    },
    coveragePathIgnorePatterns: ['App.tsx', 'main.jsx', 'index.ts'],
};
export default config;
