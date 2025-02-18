const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });

  const prevAmount = (await redis.getAsync("added_todos")) || 0;
  await redis.setAsync("added_todos", Number(prevAmount) + 1);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const { text, done } = req.body;

  // Check that one of the values is defined
  if (text === undefined && done === undefined) {
    return res.sendStatus(400);
  }

  // Update the values if they are defined
  // Otherwise, keep the old values
  req.todo.text = text === undefined ? req.todo.text : text;
  req.todo.done = done === undefined ? req.todo.done : !!done;

  await req.todo.save();

  res.send(req.todo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
