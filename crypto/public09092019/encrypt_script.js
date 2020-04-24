const fs = require("fs");
const crypto = require('crypto');
const secret = crypto.publicEncrypt(fs.readFileSync("key"), fs.readFileSync("decrypt.js"));
fs.writeFileSync("secret2", secret);