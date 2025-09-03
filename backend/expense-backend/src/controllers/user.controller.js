import User from "../models/users.js";

//get all users-- list users
export const listUser = async (req, resp) => {
  //list users

  const users = await User.find();
  resp.status(200).json(users);
};

//get single user
export const getUser = async (req, resp) => {
  const { userId } = req.params;

  const user = await User.findOne({
    _id: userId,
  });

  resp.status(200).json(user);
};

//create user
export const createUser = async (req, resp) => {
  const { username, email, password, age, gender } = req.body;

  try {
    const user = await User.create({ username, email, password, age, gender });
    resp.status(201).json(user);
  } catch (e) {
    console.log(e);
    // console.log(e.message.split(":"));
    const errs = Object.values(e.errors).map((ob) => {
      // console.log(ob.message);
      return {
        property: ob.properties.path,
        errorValue: ob.message,
      };
    });

    resp.status(400).json(errs);
  }
};

//update
export const updateUser = (req, resp) => {};

//delete user
export const deleteUser = (req, resp) => {};
