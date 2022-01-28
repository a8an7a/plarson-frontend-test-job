import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
    context: resolve(__dirname, 'src'),
    entry: { main: './index.js' },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: { '@': resolve(__dirname, 'src') },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve(__dirname, 'src/favicon.ico'),
                    to: resolve(__dirname, 'dist'),
                },
                {
                    from: resolve(__dirname, 'src/assets'),
                    to: resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['postcss-preset-env']],
                            },
                        },
                    },
                ],
            },
            { test: /\.(ico|svg|png|jpg)$/i, type: 'asset/resource' },
        ],
    },
}
