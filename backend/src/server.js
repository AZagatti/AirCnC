const express = require("express");

const app = express();

app.put("/users/:id", (req, res) => {
  return res.json({ id: req.params.id });
});

app.listen(3333);
