import express from "express";

const app = express();

const port = 4000;

app.use("/robots", (req, res) => {
  res.json({
    ping: "pong",
  });
});

app.listen(port);
