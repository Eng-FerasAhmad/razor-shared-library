import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { createFilter } from '@rollup/pluginutils';

export default defineConfig({
    plugins: [
        react(),
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
            external: [
                'react',
                'react-dom',
                '@mui/material',
                '@mui/icons-material',
                '@mui/x-date-pickers',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    '@mui/icons-material': 'MaterialUIIcons',
                    '@mui/x-date-pickers': 'MaterialUIXDatePickers',
                },
            },
            plugins: [
                {
                    name: 'exclude-stories',
                    buildStart() {
                        const filter = createFilter(
                            ['**/*.stories.ts', '**/*.stories.tsx'],
                            null,
                            { resolve: false }
                        );
                        this.addWatchFile = function (id) {
                            if (!filter(id)) {
                                this.emitFile({ type: 'chunk', id });
                            }
                        };
                    },
                },
            ],
        },
        sourcemap: false,
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
