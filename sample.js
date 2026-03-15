const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

// get todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// add todo
app.post("/todos", (req, res) => {
  const todo = req.body.text;
  todos.push(todo);
  res.json({ message: "Todo added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});