const express = require("express");
const app = express();
const cor = require("cors");

app.use(express.json());
app.use(cor());

const db = require("./models");

//Routers - Post
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

//Routers - Comments
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

//Routers - Users
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
});
