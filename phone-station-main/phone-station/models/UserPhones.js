module.exports = (sequelize, DataTypes) => {
  const UserPhones = sequelize.define('UserPhones', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    phone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'userphones',
    timestamps: false,
    freezeTableName: true,
  });

  UserPhones.associate = (models) => {
    UserPhones.belongsTo(models.Phone, { foreignKey: 'phone_id' });
    UserPhones.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return UserPhones;
};
