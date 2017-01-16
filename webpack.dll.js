const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('========================================================');
console.log('WEBPACK NODE_ENV :: ', JSON.stringify(env));
console.log('========================================================');

module.exports = {
    entry: {
        /**
         * throw new Error("DllPlugin: supply an Array as entry");
         * dll的vendor必须是数组的形式
         */
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            // 开发依赖
            // 'redux-logger',
            // 'react-addons-Perf',

            'react-addons-css-transition-group',
            'material-ui',
            'hammerjs',
            'jQuery',
            'whatwg-fetch',
            'es6-promise',
            'velocity-animate',
            'react-tap-event-plugin'
        ]
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: "[name]-[hash:8].js",
        library: "[name]",
        pathinfo: env === 'development'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.join(__dirname, 'dll'),
            prettyPrint: true
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            /**
             * 这里的name写成'[name].js'，会报错
             * https://github.com/webpack/webpack/issues/3975
             */
            name: "[name]",
            context: __dirname
        }),
         new CleanWebpackPlugin('dll', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: ["node_modules"]
    }
};


