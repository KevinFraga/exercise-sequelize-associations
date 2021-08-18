const bodyParser = require('body-parser');

const express = require('express');

const { Plan, Patient, Surgery, PatientSurgery } = require('./models');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: Plan, as: 'plan' }],
      attributes: { exclude: ['plan_id'] },
    });

    res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
