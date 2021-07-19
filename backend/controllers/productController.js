const Product = require('../modules/product')
const ErrorHandler = require('../utils/errorHandler')

//Create new product =>/api/v1/admin/product/new
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
    return next(new ErrorHandler('product not found', 404))
  }
  res.status(200).json({
    success: true,
    product,
  })
}

//update products =>/api/v1/admin/products/
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    })
  } else {
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })

    res.status(200).json({
      success: true,
      product,
    })
  }
}

//delete product =>/api/v1/admin/product/:id
exports.deleteProduct = async (req, res, nex) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    })
  } else {
    await product.remove()
    res.status(200).json({
      success: true,
      message: 'Product deleted',
    })
  }
}
