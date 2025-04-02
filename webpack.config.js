const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // ... 其他 Webpack 設定 ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [
            // 在 webpack@5 中，您可以使用 '...' 語法來擴充先前的 minimizers（如果有）。
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};