const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
  });

  return Surgery;
};

module.exports = Surgery;
