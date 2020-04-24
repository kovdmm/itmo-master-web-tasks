/* kovdmm */
const fs = require("fs");
const crypto = require('crypto');
const text = crypto.publicDecrypt(fs.readFileSync("key"), fs.readFileSync("secret"));
console.log(String(text));
