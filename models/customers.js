const idValidator = require('mongoose-id-validator');

module.exports = (mongoose) => {
  const customersSchema = new mongoose.Schema({
    id: Number,
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
    buildings:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buildings',
    }],
  },
  { timestamps: true });
  customersSchema.plugin(idValidator);
  const Customers = mongoose.model(
    'Customers',
    customersSchema,
  );
  return Customers;
};