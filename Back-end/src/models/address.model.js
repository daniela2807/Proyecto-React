const { Schema } = require("mongoose");
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id_user: { type: Schema.ObjectId, ref: "User" },
            street: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                required: true,
            },
            phone:{
                type:String,
                required:true
            },
            cp: {
                type: Number,
                required: true,
            },
            neighborhood: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
              },
            country: {
                type: String,
                required: true,
            }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Address = mongoose.model("Address", schema);
    return Address;
};