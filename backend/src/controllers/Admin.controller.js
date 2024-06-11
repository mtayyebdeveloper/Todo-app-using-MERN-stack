import { Todo } from "../models/todo.model.js";
import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.model.js";
import bcrypt from "bcryptjs";

const GetAllTodosController = async (req, res, next) => {
  try {
    const alltodos = await Todo.find();

    if (!alltodos) {
      return res.status(201).json({ massage: "Todos not found." });
    }

    res.status(200).json({
      massage: "Todos found successfuly.",
      alltodos,
    });
  } catch (error) {
    next(error);
  }
};

const GetAllContactsController = async (req, res, next) => {
  try {
    const allContacts = await Contact.find();

    if (!allContacts) {
      return res.status(201).json({ massage: "Contacts not found." });
    }

    res.status(200).json({
      massage: "Contacts found successfuly.",
      allContacts,
    });
  } catch (error) {
    next(error);
  }
};

const deltecontactController = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const contact = await Contact.findOne({ _id });
    if (!contact) {
      return res.status(201).json({ message: "contact not found." });
    }
    await Contact.deleteOne({ _id });
    return res.status(200).json({ message: "contact deleted successfuly." });
  } catch (error) {
    next(error);
  }
};

const GetAllUsersController = async (req, res, next) => {
  try {
    const allUsers = await User.find().select("-password");

    if (!allUsers) {
      return res.status(201).json({ massage: "Users not found." });
    }

    res.status(200).json({
      massage: "Users found successfuly.",
      allUsers,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteTodosController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (!_id) {
      return res.status(201).json({ message: "todo not found." });
    }
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

const DeleteUsersController = async (req, res, next) => {
  const _id = req.params.id;

  try {
    if (!_id) {
      return res.status(201).json({ message: "user not found." });
    }
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(201).json({ message: "user not found." });
    }
    await User.deleteOne({ _id });

    return res.status(200).json({ message: "user deleted successfuly." });
  } catch (error) {
    next(error);
  }
};

const UpdateTodosController = async (req, res, next) => {
  const _id = req.params.id;
  const data = req.body;

  try {
    if (!_id) {
      return res.status(201).json({ message: "todo not found." });
    }
    const findtodo = await Todo.findOne({ _id });
    if (!findtodo) {
      return res.status(201).json({ message: "todo not found." });
    }
    const todo = await Todo.updateOne({ _id }, data);

    if (!todo) {
      return res.status(201).json({ message: "todo not updated." });
    }

    return res.status(200).json({ message: "Todo updated successfuly." });
  } catch (error) {
    next(error);
  }
};

const UpdateUsersController = async (req, res, next) => {
  const _id = req.params.id;
  const data = req.body;

  try {
    if (!_id) {
      return res.status(201).json({ message: "user not found." });
    }
    const findUser = await User.findOne({ _id });
    if (!findUser) {
      return res.status(201).json({ message: "user not found." });
    }

    const saltround = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, saltround);

    const user = await User.updateOne({ _id }, data);

    if (!user) {
      return res.status(201).json({ message: "user not updated." });
    }

    return res.status(200).json({ message: "user updated successfuly." });
  } catch (error) {
    next(error);
  }
};

export {
  GetAllTodosController,
  GetAllUsersController,
  DeleteTodosController,
  UpdateTodosController,
  DeleteUsersController,
  UpdateUsersController,
  deltecontactController,
  GetAllContactsController,
};
