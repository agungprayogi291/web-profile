const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:"/node_moduls/",
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@bebel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})