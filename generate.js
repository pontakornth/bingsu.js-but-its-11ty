const fs = require("fs");
const toml = require("toml");
const glob = require("glob");

const generatedData = []

glob("./src/**/*.toml", function (err, files) {
    if (err == null) {
        for (let file of files) {
            const rawContent = fs.readFileSync(file);
            const content = toml.parse(rawContent);
            const date = file.match(/\d{4}[-]\d{2}[-]\d{2}/)[0]
            generatedData.push({...content, date });
        }
        fs.writeFile("./src/__data/bingsu.json", JSON.stringify(generatedData, null ,2), function () {
            console.log("Completed.")
        })
    }
})