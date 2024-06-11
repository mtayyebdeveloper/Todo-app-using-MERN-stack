import { Todo } from "../models/todo.model.js";

const FormController = async (req, res, next) => {
  try {
    const { workspaceName, username, email, password, massage } = req.body;

    const tododata = await Todo.create({
      workspaceName,
      username,
      email,
      password,
      massage,
      auther: req.user._id,
    });

    if (!tododata) {
      return res.status(201).json({ message: "Todo creating error." });
    }

    return res.status(200).json({
      message: "Todo created successfuly.",
      todoID: tododata._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const TodoDataController = async (req, res, next) => {
  try {
    const user = req.user._id;
    const data = await Todo.find({ auther: user });

    if (!data) {
      return res.status(201).json({ message: "Todo data not found." });
    }

    return res.status(200).json({
      message: "Data found successfuly.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getTodoController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const todo = await Todo.findOne({ _id });
    if (!todo) {
      return res.status(201).json({ message: "todo not found." });
    }

    return res.status(200).json({
      message: "todo found successfuly.",
      todo,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteTodoController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    // if (!_id) {
    //   return res.status(201).json({ message: "id not found." });
    // }
    const todo = await Todo.findOne({ _id });
    if (!todo) {
      return res.status(201).json({ message: "todo not found." });
    }
    await Todo.deleteOne({ _id });

    return res.status(200).json({ message: "Todo deleted successfuly." });
  } catch (error) {
    next(error);
  }
};

const UpdateTodoController = async (req, res, next) => {
  const _id = req.params.id;
  const { workspaceName, username, email, password, massage } = req.body;

  try {
    // if (!_id) {
    //   return res.status(201).json({ message: "todo not found." });
    // }
    const findtodo = await Todo.findOne({ _id });
    if (!findtodo) {
      return res.status(201).json({ message: "todo not found." });
    }
    const todo = await Todo.updateOne(
      { _id },
      {
        workspaceName,
        username,
        email,
        password,
        massage,
      }
    );

    return res.status(200).json({ message: "Todo updated successfuly." });
  } catch (error) {
    next(error);
  }
};

export {
  FormController,
  TodoDataController,
  DeleteTodoController,
  UpdateTodoController,
  getTodoController,
};
