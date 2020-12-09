const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const appointmentsSchema = new mongoose.Schema({
    idBuilding: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buildings',
      required: true,
    },
    idBoiler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boilers',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: Number,
    endTime: Number,
    idTechnician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Technicians',
      required: true,
    },
    type: String,
  },
  { timestamps: true });
  appointmentsSchema.plugin(idValidator);
  const appointments = mongoose.model(
    'appointments',
    appointmentsSchema,
  );
  return appointments;
};
