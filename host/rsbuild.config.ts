import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output.publicPath = 'auto'
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            remote: `remote@http://localhost:3101/remoteEntry.js`,
          },
          dev: {
            disableHotTypesReload: true,
            disableDynamicRemoteTypeHints: true
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '18.3.1',
            },
            'react-dom': {
              singleton: true,
              requiredVersion: '18.3.1',
            }
          }
        }),
      ]);
    },
  },
});
