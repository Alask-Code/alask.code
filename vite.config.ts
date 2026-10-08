import react from '@vitejs/plugin-react';
import { UserConfig } from 'vite';
import { join } from 'path';

const root = __dirname;
const srcRoot = join(__dirname, 'src');

function plugins() {
  return [react()];
}

export default (): UserConfig => {
  return {
    root,
    base: './',
    plugins: plugins(),
    resolve: {
      alias: { '@': srcRoot, '/@': srcRoot }
    },
    build: {
      outDir: join(root, 'dist-vite'),
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: { port: 3000 },
    optimizeDeps: { exclude: ['path'] }
  };
};
