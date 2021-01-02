const toml = require("toml");
const glob = require("glob");
const fs = require("fs");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("toml", contents => toml.parse(contents));
    
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
