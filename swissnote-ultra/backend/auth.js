const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET = "SUPER_SECRET_KEY";

// Hash von deinem Passwort (einmal generieren!)
const HASH = "$2b$10$examplehash";

async function login(req,res){
  const {password} = req.body;

  const valid = await bcrypt.compare(password, HASH);

  if(!valid){
    return res.status(401).send("❌ falsch");
  }

  const token = jwt.sign({user:"owner"}, SECRET);
  res.json({token});
}

module.exports = {login};
