const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      default: "Table",
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    color: {
      type: String,
      required: true,
    },

    origin: {
      type: String,
      required: true,
    },

    density: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Available",
        "Out Of Stock",
      ],
      default: "Available",
    },

    image: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);