import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        eslintPlugin,
        dts({
            include: ['src/**/*'],
            exclude: ['**/*.stories.tsx', '**/*.stories.ts'],
        }),
    ],
    server: {
        port: 3033,
        origin: ' http://127.0.0.1:3033',
    },
    build: {
        lib: {
            entry: resolve('src', 'index.ts'),
            name: 'razor-shared-library',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            shared: '/src/shared',
        },
    },
});
