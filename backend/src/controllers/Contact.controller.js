import { Contact } from "../models/contact.model.js";

export const ContactController = async (req, res, next) => {
  try {
    const { fullName, email, message } = req.body;
    if (!email && !fullName && !message) {
      return res.status(201).json({ message: "data not found" });
    }
    const contacts = await Contact.create({
      fullName,
      email,
      message,
    });

    return res.status(200).json({
      message: "Message sent successfully.  We will contact you soon.",
      contacts,
    });
  } catch (error) {
    next(error);
  }
};
