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
    const data = await Todo.find();

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

const DeleteTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(201).json({ message: "Todo not found." });
    }

    await Todo.deleteOne({ _id: id });

    return res.status(200).json({ message: "Todo deleted successfuly." });
  } catch (error) {
    next(error);
  }
};

const UpdateTodoController = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const { workspaceName, username, email, password, massage } = req.body;

    if (!_id) {
      return res.status(201).json({ message: "Todo not found." });
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
};
