const { Schema } = require("mongoose");

module.exports = mongoose => {
    //var Category = mongoose.model('Category');
    var schema = mongoose.Schema(
        {
            id_user: {
                type: Schema.ObjectId, ref: "User"
            },
            products: [{ type: Schema.ObjectId, ref: "Product" }]
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Favorits = mongoose.model("Favorits", schema);
    return Favorits;
};