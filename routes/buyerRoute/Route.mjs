import  express  from 'express'
import {addBid,getBidProducts,getSeller,getSellers,requestContact , addProductsToCart , getCart , getProducts ,purchaseProduct , removeCart , requestMeeting,requestDemo,confirmWinner, getSellingProducts, getProductById, searchCart, rate, addFeedback,getRate} from '../../operations/buyerOperations/index.mjs'

const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('buyer home')
})

router.post('/add_bid' ,(req,res,next)=>{
    addBid(req,res)
})

router.post('/add_to_cart' ,(req,res,next)=>{
    for(let i=0; i<req.body.product_ids.length; i++){
        addProductsToCart(req, res, req.body.product_ids[i] , req.body.buyer_id, req.body.quantity)
    }
    res.send("Product added to cart!")
})

router.get('/get_products' ,(req,res,next)=>{
    getProducts(req,res)
})

router.get('/get_selling_products' ,(req,res,next)=>{
    getSellingProducts(req,res)
})

router.get('/get_bid_products' ,(req,res,next)=>{
    getBidProducts(req,res)
})

router.get('/get_cart/:buyer_id' ,(req,res,next)=>{
    getCart(req,res)
})

router.get('/get_sellers' ,(req,res,next)=>{
    getSellers(req,res)
})

router.get('/get_seller/:seller_id' ,(req,res,next)=>{
    getSeller(req,res)
})

router.get('/purchase_product/:product_id' ,(req,res,next)=>{
    purchaseProduct(req,res)
})

router.get('/get_product/:product_id' ,(req,res,next)=>{
    getProductById(req,res)
})

router.get('/search_cart/:key/:buyer_id' ,(req,res,next)=>{
    searchCart(req,res)
})

router.put('/rate/:rate/:product_id' ,(req,res,next)=>{
    rate(req,res)
})

router.get('/rate/:product_id' ,(req,res,next)=>{
    getRate(req,res)
})

router.delete('/remove_cart/:cart_id' ,(req,res,next)=>{
    removeCart(req,res)
})

router.post('/request_meeting' ,(req,res,next)=>{
    requestMeeting(req,res)
})
router.post('/request_demo' ,(req,res,next)=>{
    requestDemo(req,res)
})

router.post('/request_contact' ,(req,res,next)=>{
    requestContact(req,res)
})

router.post('/addFeedback' ,(req,res,next)=>{
    addFeedback(req,res)
})

router.put('/confirm-winner/:winner_id/:product_id/:email' ,(req,res,next)=>{
    confirmWinner(req,res)
})

export default router