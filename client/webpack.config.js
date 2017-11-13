const path = require('path'),
babiliPlugin = require('babili-webpack-plugin'),
extractTextPlugin = require('extract-text-webpack-plugin'),
optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.js",
        minChunks: Infinity
    })
];

plugins.push(new HtmlWebpackPlugin({
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
    },
    filename: 'index.html',
    template: __dirname + '/main.html',
}));

plugins.push(
    new extractTextPlugin("styles.css")
);

plugins.push(
    new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.js',
        jQuery: 'jquery/dist/jquery.js'
    })
);
let SERVICE_URL = JSON.stringify('http://localhost:3000');
if (process.env.NODE_ENV === 'production') {
    SERVICE_URL = JSON.stringify('');
    plugins.push(new babiliPlugin());
    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
}
plugins.push(
    new webpack.DefinePlugin({
    SERVICE_URL
}));

module.exports = {
    entry: {
        vendor: ['jquery', 'bootstrap', 'reflect-metadata'],
        app: './app-src/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins
};
