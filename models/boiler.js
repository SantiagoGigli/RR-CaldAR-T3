const { Mongoose } = require("mongoose");

// USE THE CODE BELOW AS EXAMPLE
module.exports = mongoose => {
    const Boilers = mongoose.model(
        "Boilers",
        mongoose.Schema(
            {
                id: Number,
                typeId: String,
                maintainaceRate: String,
                hourMaintainaceCost: Number,
                hourEventualCost: Number,
                idBuilding: Number
            },
            { timestamps: true} 
        )
    )
    return Boilers;
};
