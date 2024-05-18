const express = require('express');

const app = express();
const sequelize = require('./database');

app.use(express.json()); // Для парсинга JSON-тела запросов
// Подключение роутов
const usersRoutes = require('./routes/usersRoutes');

app.use('/api', usersRoutes);
const callsRoutes = require('./routes/callsRoutes');

app.use('/api', callsRoutes);
const userPhonesRoutes = require('./routes/userPhonesRoutes');

app.use('/api', userPhonesRoutes);
const phonesRoutes = require('./routes/phonesRoutes');

app.use('/api', phonesRoutes);

// Применение роутов к приложению


// Проверка соединения с базой данных и запуск сервера
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Синхронизация моделей с базой данных (создание таблиц)
    await sequelize.sync({ alter: true });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
