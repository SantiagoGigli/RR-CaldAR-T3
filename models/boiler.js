const idValidator = require('mongoose-id-validator');
// USE THE CODE BELOW AS EXAMPLE
module.exports = (mongoose) => {
  const boilerSchema = new mongoose.Schema({
    maintainanceRate: String,
    hourMaintainaceCost: Number,
    hourEventualCost: Number,
    idBuilding: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buildings',
      required: false,
    },
    typeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BoilersType',
      required: true,
    },
  },
  { timestamps: true });
  boilerSchema.plugin(idValidator);
  const Boilers = mongoose.model(
    'Boilers',
    boilerSchema,
  );
  return Boilers;
};
