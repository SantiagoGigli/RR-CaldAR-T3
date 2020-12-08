module.exports = (mongoose) => {
  const appointments = mongoose.model(
    "appointments",
    mongoose.Schema(
      {
        id: Number,
        idBuilding: Number,
        idBoiler: Number,
        date: Date,
        startTime: Number,
        endTime: Number,
        idTechnician: Number,
        type: String,
      },
      { timestamps: true }
    )
  );
  return appointments;
};
