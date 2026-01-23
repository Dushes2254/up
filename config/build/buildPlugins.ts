import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [new ProgressPlugin(), new HTMLWebpackPlugin({ template: paths.html }), new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css',
  })];
};
