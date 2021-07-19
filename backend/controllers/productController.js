const Product = require('../modules/product')

//Create new product =>/api/v1/product/new
exports.newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)

    res.status(201).json({
      success: true,
      product,
    })
  } catch (error) {
    console.log(error)
  }
}

//get all products => /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find()
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  })
}

//get single products =>/api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    })
  } else {
    res.status(200).json({
      success: true,
      product,
    })
  }
}
