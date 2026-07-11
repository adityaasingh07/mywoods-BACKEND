const Product = require("../models/Product");

// ==============================
// GET ALL PRODUCTS
// ==============================

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// GET SINGLE PRODUCT
// ==============================

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// CREATE PRODUCT
// ==============================

exports.createProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      price: Number(req.body.price),
      description: req.body.description,

      category: req.body.category,

      stock: Number(req.body.stock),

      color: req.body.color,

      origin: req.body.origin,

      density: req.body.density,

      status: req.body.status,

      rating: req.body.rating
        ? Number(req.body.rating)
        : 5,
    };

    // Cloudinary Image
    if (req.file) {
      productData.image = req.file.path;
    }

    const product = new Product(productData);

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// UPDATE PRODUCT
// ==============================

exports.updateProduct = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,

      price: Number(req.body.price),

      description: req.body.description,

      category: req.body.category,

      stock: Number(req.body.stock),

      color: req.body.color,

      origin: req.body.origin,

      density: req.body.density,

      status: req.body.status,

      rating: req.body.rating
        ? Number(req.body.rating)
        : 5,
    };

    // Replace image only if new image uploaded
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ==============================
// DELETE PRODUCT
// ==============================

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct =
      await Product.findByIdAndDelete(
        req.params.id
      );

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};