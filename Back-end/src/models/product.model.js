const { Schema } = require("mongoose");

   module.exports = mongoose => {
    //var Category = mongoose.model('Category');
    var schema = mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
        brand: {
          type: String,
          required: true,
        },
        cost: {
          type: Number,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
        id_cat:{ type: Schema.ObjectId, ref: "Category" }  ,
        description: {type: Array, default: [], require:false}
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Product = mongoose.model("Product", schema);
    return Product;
  };