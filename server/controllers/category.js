import sligify from "slugify";
import Category from "../models/category";

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name, slug: sligify(name) }).save();
    res.json(category);
  } catch (err) {
    console.log(err);
  }
};

export const categories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOneAndDelete({ slug });
    res.json(category);
  } catch (err) {
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOneAndUpdate({ slug });
    res.json(category);
  } catch (err) {
    console.log(err);
  }
};
