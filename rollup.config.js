module.exports = {
    input: ["index.js"],
    output: {
        dir: "dist",
        format: "esm",
        entryFileNames: '[name].[hash].js',
    },
    plugins: [
        require("@modular-css/rollup")({
            namer: function (file, selector) {
                return selector;
            }
        })
    ],
    experimentalCodeSplitting: true
};
