const Sequelize = require('sequelize');

const sequelize = new Sequelize('arnt', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Импортируем модели
db.Phone = require('./Phones')(sequelize, Sequelize);
db.Call = require('./Calls')(sequelize, Sequelize);
db.User = require('./Users')(sequelize, Sequelize);
db.UserPhones = require('./UserPhones')(sequelize, Sequelize);

Object.keys(db)
  .forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

module.exports = db;
