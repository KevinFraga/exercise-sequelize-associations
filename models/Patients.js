const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, 
      { foreignKey: 'patient_id', as: 'plan' });
  };

  return Patient;
};

module.exports = Patient;
