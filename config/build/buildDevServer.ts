import type { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): ConfigurationDevServer => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
  client: {
    overlay: false,
  },
});
