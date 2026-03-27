const express = require("express");
const router = express.Router();
const Note = require("./db");

router.post("/save", async (req,res)=>{
  const {value, qr, ai} = req.body;

  await Note.create({
    value,
    qr,
    ai,
    created: new Date()
  });

  res.send("gespeichert");
});

router.get("/notes", async (req,res)=>{
  const notes = await Note.find();
  res.json(notes);
});

module.exports = router;
