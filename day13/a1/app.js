console.log("-- Loading for app.js starts ! --");

const username = "Ashim";

const textHelper = require("./text-formatter.js"); // import
const paraHelper = require("./para-formatter.js"); // import

const resp = textHelper.getCamelCaseText("hello world in node js");

console.log("resp : ", resp);
console.log("Username: ", username);

const resp2 = paraHelper.formatParagraph(
  `
        The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.
    `
);

console.log("resp2 : ", resp2);
