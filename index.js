const express = require("express");
const usersRouter = require("./routes/users.routes");
const todosRouter = require("./routes/todos.routes");

const app = express();
const PORT = 3000;

// JSON Middleware
app.use(express.json());

// Routes
app.use("/users", usersRouter);
app.use("/todos", todosRouter);

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});