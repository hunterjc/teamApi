const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-aggregate-paginate-v2");

const socialSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
});

const teamSchema = new mongoose.Schema(
  {
    image: { type: String, default: null },
    name: {
      type: String,
      trim: true,
      required: [true, "Name field is required"],
    },
    designation: {
      type: String,
      trim: true,
      required: [true, "position field is required"],
    },
    // social: {
    //   type: socialSchema,
    //   default: null,
    // },
    status: {
      type: Number,
      enum: [1, 2],
      default: 1,
    },
    ordering: { type: Number, default: 0 },
    deletedAt: { type: Date, default: null },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,

      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,

      default: null,
    },
    deletedBy: {
      type: mongoose.Schema.Types.ObjectId,

      default: null,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// teamSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("teams", teamSchema);
