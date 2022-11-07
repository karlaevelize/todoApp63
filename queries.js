const { sequelize } = require("./models");

const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

//get all the users -> findAll()
const getUsers = async () => {
  const users = await User.findAll({ raw: true });
  console.log(users);
  sequelize.close(); // -> end request
};

// getUsers();

//get one user by id -> findByPk(id)
const getUserById = async (id) => {
  const user = await User.findByPk(id, { raw: true });
  console.log(user);
  sequelize.close();
};

// getUserById("1");
//get one by email -> findOne({ where: "statement" })
const getUserByEmail = async (email, name) => {
  const user = await User.findOne({
    where: { email: email, name: name },
    raw: true,
  });
  console.log(user);
  sequelize.close();
};

// getUserByEmail("swen@swen.com");

const createUser = async () => {
  const newUser = await User.create({
    name: "Wouter",
    email: "wouter@wouter.com",
    phone: 1234,
    password: "test",
  });

  const newList = await TodoList.create({
    name: `${newUser.name}'s List`,
  });

  console.log(newUser.dataValues, newList.dataValues);
  sequelize.close();
};

createUser();
