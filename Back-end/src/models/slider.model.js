module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id:{
          type: String,
          required: true,
        },
        img:{
          type: String,
          required: true,
        },
        
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Slider = mongoose.model("Slider", schema);
    return Slider;
  };