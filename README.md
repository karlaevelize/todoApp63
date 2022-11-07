### Steps

1. `npm init --y`
2. `npm i sequelize sequelize-cli pg express`
3. Create .gitnore file. Inside .gitignore -> `node_modules/`
4. `git init`
5. `npx sequelice-cli init` -> create folders

## ElephantSQL

1. Create new instance
2. Copy credentials

## Back to app

1. Modify `config/config.js`
2. Add url to delevelopment
3. **!! IMPORTANT:** Modify `model/index.js` line 16 to `sequelize = new Sequelize(config.url, config);`

## Conect to Postico or DBeaver

1. Copy url from elephantSQL and set up

## Usefull commands:

- Migrate: `npx sequelize-cli db:migrate`
- Seed: `npx sequelize-cli db:seed:all`
- Undo migrations: `npx sequelize-cli db:migrate:undo:all`

- Generate models: `npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string`

- Generate seeds: `npx sequelize-cli seed:generate --name some-users`

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Leo Messi",
          email: "leo@messi.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          email: "dan@redux.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
```
