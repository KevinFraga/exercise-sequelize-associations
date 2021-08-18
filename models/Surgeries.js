const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return Surgery;
};

module.exports = Surgery;
