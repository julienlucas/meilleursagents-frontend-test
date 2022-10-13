import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(() => {
  const env = loadEnv('mock', process.cwd(), '');

  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
    server: {
      origin: 'http://localhost:3000/realtors',
    },
  };
});
