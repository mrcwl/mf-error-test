import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3101
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output.publicPath = 'auto'
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'remote',
          filename: 'remoteEntry.js',
          exposes: {
            './Test': './src/Test',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '18.2.0',
            },
            'react-dom': {
              singleton: true,
              requiredVersion: '18.2.0',
            }
          }
        }),
      ]);
    },
  },
});
