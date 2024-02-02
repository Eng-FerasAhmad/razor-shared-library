import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import eslintPlugin from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({
            include: ['src/**/*'],
        }),
        eslintPlugin
    ],
    server: {
    port: 3033,
    origin: ' http://127.0.0.1:3033',
    },
    build: {
        lib: {
            entry: resolve('src', 'components/index.ts'),
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
});
