module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.scss', '.sass'],
    },

    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                },
            },
            {
                test: /\.css$|\.scss$|\.sass$/,
                loader: 'style!css!sass',
            },
        ],
    },

    devServer: {
        inline: true,
    },
};