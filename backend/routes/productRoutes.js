import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
    '/:id',
    async(req, res) => {
        try {
            const product = await Product.findById(req.params.id)

            if (product) {
                res.json(product)
            } else {
                res.status(404).json({message: 'Product not found'})
            }
        } catch (e) {
            res.status(404).json({message: 'Product not found'})
        }
    }
)

export  default router