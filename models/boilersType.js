module.exports = (mongoose) => {
  const boilersType = mongoose.model(
    'BoilersType',
    mongoose.Schema(
      {
        id: Number,
        description: String,
        stock: Number,
      },
      { timestamps: true },
    ),
  );
  return boilersType;
};
