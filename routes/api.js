const express = require("express");
const router = express.Router();

// Sample Data
let data = [{ id: 1, content: "First item" }];

// Routes
router.get("/items", (req, res) => {
  res.status(200).send(data);
});

router.post("/items", (req, res) => {
  const { content } = req.body;
  const newItem = { id: data.length + 1, content };
  data.push(newItem);
  res.status(201).send(newItem);
});

router.patch("/items/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const item = data.find((item) => item.id === parseInt(id));
  item.content = content;
  res.status(200).send(item);
});

router.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((item) => item.id !== parseInt(id));
  res.status(204).send();
});

module.exports = router;
