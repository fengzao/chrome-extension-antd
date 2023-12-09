const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
});



function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlWebpackPlugin({
                filename: `${chunk}/index.html`,
                chunks: [chunk],
                template: "./index.html"
            })
    );
}

module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        content: "./content/index.js",
        popup: "./popup/index.js"
    },
    output: {
        path: path.resolve(__dirname, './_dist_'),
        filename: '[name]/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                exclude: /node_modules/,
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                exclude: /node_modules/,
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader']
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./manifest.json", to: "./manifest.json"
                },
                {
                    from: "./images", to: "./images"
                },
                {
                    from: "./background", to: "./background"
                }
            ]
        }),
        ...getHtmlPlugins(["content", "popup",])
    ],

    resolve: {
        extensions: ['.mjs', '.js', '.jsx'],
    },
};