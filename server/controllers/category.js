import sligify from "slugify";
import Category from "../models/category";

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name, slug: sligify(name) }).save();
    res.json(category);
  } catch (err) {
    console.log(error);
  }
};
