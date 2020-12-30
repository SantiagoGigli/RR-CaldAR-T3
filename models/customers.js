const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const customersSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['particular', 'business'],
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
      required: false,
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
