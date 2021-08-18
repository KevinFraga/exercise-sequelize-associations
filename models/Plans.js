const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.FLOAT,
  },
  {
    timestamps: false,
    tableName: 'Plans',
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, 
      { foreignKey: 'plan_id', as: 'patients' });
  };

  return Plan;
};

module.exports = Plan;
