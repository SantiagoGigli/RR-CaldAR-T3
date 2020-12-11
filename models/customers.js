const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const customersSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['particular', 'bussiness'],
      required: true,
    },
    email: String,
    address: {
      type: String,
      required: true,
    },
    buildings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buildings',
    }],
  },
  { timestamps: true });
  customersSchema.plugin(idValidator);
  const Customers = mongoose.model(
    'customers',
    customersSchema,
  );
  return Customers;
};
