const List = require("../models/List"); //todo coming from models// change in model listjs

module.exports = {
  getlist: async (req, res) => {
    console.log(req.user);
    try {
      const listItems = await List.find({ userId: req.user.id });
      const itemsLeft = await List.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("list.ejs", {
        list: listItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createlist: async (req, res) => {
    try {
      await List.create({
        list: req.body.listItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Todo has been added!");
      res.redirect("/list");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await List.findOneAndUpdate(
        { _id: req.body.listIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await List.findOneAndUpdate(
        { _id: req.body.listIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deletelist: async (req, res) => {
    console.log(req.body.listIdFromJSFile);
    try {
      await List.findOneAndDelete({ _id: req.body.listIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
