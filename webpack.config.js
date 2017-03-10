module.exports = {
    resolve: {
        extensions: [ '', '.js', '.jsx']
    },
    entry: './src/index.jsx'
    /*entry: {
        app: './src/index.jsx'         
    }*/,
    output: {
        filename: 'app.js',
        /*filename: '[name].js',*/
        path: './build',        
        publicPath: '/'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    module: {
        loaders: [
             {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
            /*{
                test: /(\.js|.jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }*/
        ]
    }
}