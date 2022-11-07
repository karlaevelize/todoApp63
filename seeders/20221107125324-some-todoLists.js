"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Karla's List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swen's List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria's List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
