const { Mongoose } = require("mongoose");

// USE THE CODE BELOW AS EXAMPLE
module.exports = mongoose => {
    const boilersType = mongoose.model(
        "boilersType",
        mongoose.Schema(
            {
                id: Number,
                description: String,
                stock: Number
            },
            { timestamps: true} 
        )
    )
    return boilersType
};