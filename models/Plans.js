const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    tableName: 'Plans',
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patients, 
      { foreignKey: 'patient_id', as: 'patients' });
  };

  return Plan;
};

module.exports = Plan;
