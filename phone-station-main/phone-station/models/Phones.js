module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('Phone', {
    phone_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'phones',
    timestamps: false
  });

  return Phone;
};
