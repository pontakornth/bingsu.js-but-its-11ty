module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "__site",
            data: "__data"
        },
        templateFormats: [
            "njk",
            "html"
        ]

    }

}
