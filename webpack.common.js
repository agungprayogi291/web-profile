var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:"./src/index.js",

    output :{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:"production",
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    },
    module:{
        rules:[
            {
            test: /\.m?js$/,
            exclude:/(node_modules|bower_components)/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
         }
           

        ]
    },
    plugins:[new HtmlWebpackPlugin()]
}