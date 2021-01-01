const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const buildingsSchema = new mongoose.Schema({
    _id: String,
    address: String,
    name: String,
    phone: String,
    idCustomer: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'customers',
      require: true,
    }],
    boilers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boilers',
      require: true,
    }],
  },
  { timestamps: true });
  buildingsSchema.plugin(idValidator);
  const Buildings = mongoose.model(
    'buildings',
    buildingsSchema,
  );
  return Buildings;
};
