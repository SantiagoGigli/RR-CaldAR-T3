const { Mongoose } = require("mongoose");

// USE THE CODE BELOW AS EXAMPLE
module.exports = mongoose => {
    const technicians = mongoose.model(
        "Technicians",
        mongoose.Schema(
            {
                id: Number,
                first_name: String,
                last_name: String
            },
            { timestamps: true} 
        )
    )
    return technicians
};