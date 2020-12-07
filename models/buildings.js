const { Mongoose } = require("mongoose");

// USE THE CODE BELOW AS EXAMPLE
module.exports = mongoose => {
    const buildings = mongoose.model(
        'buildings',
        mongoose.Schema(
            {
                id: Number,
                address: String,
                name: String,
                phone: String,
                idCustomer: Number,
                boilers:[]
            },
            { timestamps: true} 
        )
    );
    return buildings;
};
