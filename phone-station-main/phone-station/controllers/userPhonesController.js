const db = require('../models');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

// CREATE user phone
exports.createUserPhone = async (req, res) => {
  try {
    const userPhone = await db.UserPhones.create(req.body);
    res.status(201).json(userPhone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// DELETE user phone by ID
exports.deleteUserPhone = async (req, res) => {
  try {
    const deleted = await db.UserPhones.destroy({
      where: {
        user_id: req.params.user_id,
        phone_id: req.params.phone_id,
      },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User phone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.calculateMonthlyFee = async (req, res) => {
  const userId = req.body.userId; // Получаем id пользователя из запроса
  const monthlyFee = req.body.monthlyFee; // Получаем id пользователя из запроса
  const month = req.body.month; // Получаем месяц из запроса (например, '2024-03')

  const monthEnd = new Date(`${month}-01`);
  monthEnd.setMonth(monthEnd.getMonth() + 1);
  monthEnd.setDate(monthEnd.getDate() - 1);
  try {
    // Находим пользователя по его id
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Находим все звонки пользователя за указанный месяц
    const calls = await db.Call.findAll({
      where: {
        [Op.and]: [
          sequelize.where(sequelize.fn('date_trunc', 'month', sequelize.col('date_time')), '<=', monthEnd),
          { caller_id: userId },
        ],
      },
    });

    // Подсчитываем общую продолжительность всех звонков в минутах
    let totalDuration = 0;
    calls.forEach((call) => {
      totalDuration += call.duration.minutes;
    });

    // Рассчитываем абонентскую плату за месяц
    const totalFee = totalDuration * monthlyFee;

    // Возвращаем результат
    res.json({ userId, month, totalFee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

