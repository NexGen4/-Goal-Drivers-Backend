import  express  from 'express'
import {addBidProduct,getReport,sendNotificationToSeller ,getBidProduct, getBidProducts , getBids ,getBid, addSellingProduct , deleteProduct , getProducts , updateProduct , getRequests , stateRequest,getProductByType} from '../../operations/sellerOperations/index.mjs'
const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('seller home')
})

router.post('/add_bid_product' ,(req,res,next)=>{
    addBidProduct(req,res)
})

router.get('/details' ,(req,res,next)=>{
    getProducts(req,res)
})

router.post('/add_selling_product' ,(req,res,next)=>{
    addSellingProduct(req,res)
})

router.get('/get_products/:seller_id' ,(req,res,next)=>{
    getProducts(req,res)
})

router.get('/get_bid_products/:seller_id' ,(req,res,next)=>{
    getBidProducts(req,res)
})

router.get('/get_bid_product/:product_id' ,(req,res,next)=>{
    getBidProduct(req,res)
})

router.get('/get_bids/:product_id' ,(req,res,next)=>{
    getBids(req,res)
})

router.get('/get_bid/:buyer_id' ,(req,res,next)=>{
    getBid(req,res)
})

router.put('/update_product/:product_id' ,(req,res,next)=>{
    updateProduct(req,res)
})

router.delete('/remove_product/:product_id' ,(req,res,next)=>{
    deleteProduct(req,res)
})

router.get('/requests/:seller_id' ,(req,res,next)=>{
   getRequests(req,res)
})

router.get('/get_report/:product_id/:email' ,(req,res,next)=>{
    getReport(req,res)
 })
 
router.put('/state_request/:request_id' ,(req,res,next)=>{
    stateRequest(req,res)
})

router.get('/get_products/:type/:seller_id' ,(req,res,next)=>{
    getProductByType(req,res)
})

router.get('/notify/:product_id/:text' ,(req,res,next)=>{
    sendNotificationToSeller(req,res)
})

export default router