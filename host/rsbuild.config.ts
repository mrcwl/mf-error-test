import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  server: {
    port: 2000
  },
  plugins: [pluginReact()],
  source: {
    include: []
  },
  dev: {
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'host',
        publicPath: 'auto',
      },
      plugins: [
          new ModuleFederationPlugin({
            name: 'host',
            remotes: {
              federation_provider: `federation_provider@http://localhost:2001/remoteEntry.js`
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: '18.3.1'
              },
              'react-dom': {
                singleton: true,
                requiredVersion: '18.3.1'
              }
            }
          })
      ]
    },
  },
});

// import { defineConfig } from '@rsbuild/core';
// import { pluginReact } from '@rsbuild/plugin-react';
// import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
//
// export default defineConfig({
//   server: {
//     port: 2000,
//   },
//   tools: {
//     rspack: (config, { appendPlugins }) => {
//       config.output!.uniqueName = 'federation_consumer';
//       appendPlugins([
//         new ModuleFederationPlugin({
//           name: 'federation_consumer',
//           remotes: {
//             federation_provider: 'federation_provider@http://localhost:3000/remoteEntry.js',
//           },
//           shared: ['react', 'react-dom'],
//         }),
//       ]);
//     },
//   },
//   plugins: [pluginReact()],
// });
