import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  server: {
    port: 2001,
  },
  dev: {
    assetPrefix: true,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = 'federation_provider';

      // Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope'
      config.output!.publicPath = 'auto';

      appendPlugins([
        new ModuleFederationPlugin({
          name: 'federation_provider',
          filename: 'remoteEntry.js',
          exposes: {
            './button': './src/Test.tsx',
          },

          // Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope'
          remotes: {
            remote1: `remote1@http://localhost:2002/remoteEntry.js`
          },

          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
