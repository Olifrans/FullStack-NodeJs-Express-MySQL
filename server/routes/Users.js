const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const userPost = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({
    where: { username: username },
  });

  if (!user) res.json({ error: "Usuario não existe" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      res.json({ error: "Atenção! Usuario ou Senha estão incorreto" });
    res.json("Login realizado com sucesso");
  });
});

module.exports = router;
