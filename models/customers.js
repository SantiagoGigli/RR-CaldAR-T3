const { Mongoose } = require("mongoose");

// USE THE CODE BELOW AS EXAMPLE
module.exports = (mongoose) => {
  const customers = mongoose.model(
    "customers",
    mongoose.Schema(
      {
        id: Number,
        type: String,
        email: String,
        address: String,
        buildings: [],
      },
      { timestamps: true }
    )
  );
  return customers;
};
