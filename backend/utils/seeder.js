const Product = require('../modules/product')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')
const products = require('../data/product')
const { connect } = require('mongoose')

//Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })
connectDatabase()

const seedProducts = async () => {
  try {
    await Product.deleteMany()
    console.log('deleted')

    await Product.insertMany(products)
    console.log('added')
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit()
  }
}

seedProducts()
