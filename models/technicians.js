const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const techniciansSchema = new mongoose.Schema({
    name: String,
    email: String,
    hourRate: Number,
    typeBoilers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BoilersType',
      required: true,
    }],
    dailyCapacity: Number,
  },
  { timestamps: true });
  techniciansSchema.plugin(idValidator);
  const Technicians = mongoose.model(
    'Technicians',
    techniciansSchema,
  );
  return Technicians;
};
