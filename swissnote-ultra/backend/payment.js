const crypto = require("crypto");

function generateQR(value){
  const data = {
    value,
    id: crypto.randomUUID(),
    time: Date.now()
  };

  return Buffer.from(JSON.stringify(data)).toString("base64");
}

module.exports = {generateQR};
