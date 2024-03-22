// vite.config.ts
import { defineConfig } from "file:///C:/Users/feras/Documents/projects/SALONA/razor-shared-library/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/feras/Documents/projects/SALONA/razor-shared-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import tsconfigPaths from "file:///C:/Users/feras/Documents/projects/SALONA/razor-shared-library/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Users/feras/Documents/projects/SALONA/razor-shared-library/node_modules/vite-plugin-dts/dist/index.mjs";
import eslintPlugin from "file:///C:/Users/feras/Documents/projects/SALONA/razor-shared-library/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ["src/**/*"]
    }),
    eslintPlugin
  ],
  server: {
    port: 3033,
    origin: " http://127.0.0.1:3033"
  },
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "razor-shared-library",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      shared: "/src/shared"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmZXJhc1xcXFxEb2N1bWVudHNcXFxccHJvamVjdHNcXFxcU0FMT05BXFxcXHJhem9yLXNoYXJlZC1saWJyYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmZXJhc1xcXFxEb2N1bWVudHNcXFxccHJvamVjdHNcXFxcU0FMT05BXFxcXHJhem9yLXNoYXJlZC1saWJyYXJ5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9mZXJhcy9Eb2N1bWVudHMvcHJvamVjdHMvU0FMT05BL3Jhem9yLXNoYXJlZC1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLFxyXG4gICAgICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgICAgICBkdHMoe1xyXG4gICAgICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZXNsaW50UGx1Z2luLFxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHBvcnQ6IDMwMzMsXHJcbiAgICAgICAgb3JpZ2luOiAnIGh0dHA6Ly8xMjcuMC4wLjE6MzAzMycsXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoJ3NyYycsICdpbmRleC50cycpLFxyXG4gICAgICAgICAgICBuYW1lOiAncmF6b3Itc2hhcmVkLWxpYnJhcnknLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgIHNyYzogJy9zcmMnLFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiAnL3NyYy9jb21wb25lbnRzJyxcclxuICAgICAgICAgICAgc2hhcmVkOiAnL3NyYy9zaGFyZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WCxTQUFTLG9CQUFvQjtBQUNwWixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDQSxTQUFTLENBQUMsVUFBVTtBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUNEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxPQUFPLFVBQVU7QUFBQSxNQUNoQyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN6QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDakI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUs7QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNaO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
