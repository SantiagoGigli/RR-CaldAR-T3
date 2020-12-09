module.exports = (mongoose) => {
  const boilersType = mongoose.model(
    'BoilersType',
    mongoose.Schema(
      {
        description: String,
        stock: Number,
      },
      { timestamps: true },
    ),
  );
  return boilersType;
};
