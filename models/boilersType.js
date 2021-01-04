const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const boilersTypeSchema = new mongoose.Schema({
    description: String,
    stock: Number,
  },
  { timestamps: true });
  boilersTypeSchema.plugin(idValidator);
  const BoilersType = mongoose.model(
    'BoilersType',
    boilersTypeSchema,
  );
  return BoilersType;
};
