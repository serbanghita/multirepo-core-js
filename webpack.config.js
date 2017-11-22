const path = require("path");
const glob = require("glob");

module.exports = {
    entry: glob.sync("./src/**/*.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "MyCore"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js"],
    }
};