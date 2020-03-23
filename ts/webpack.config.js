module.exports = {
    entry:  __dirname + "/src/testCall/a.ts",
    devtool: 'source-map',
    output: {
        path: __dirname + "/public/js",
        filename: "bundleMain.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
};
