module.exports = (mongoose) => {
  const technicians = mongoose.model(
    'Technicians',
    mongoose.Schema(
      {
        id: Number,
        name: String,
        email: String,
        hourRate: Number,
        typeBoilers: [],
        dailyCapacity: Number,
      },
      { timestamps: true },
    ),
  );
  return technicians;
};
