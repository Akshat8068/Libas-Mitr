import express from "express"
import adminController from "../controllers/adminController.js"
import protect from "../middleware/authMiddleware.js"
import upload from "../middleware/fileUploadMiddleware.js"


const router = express.Router()
// Get All users

router.get("/users", protect.forAdmin, adminController.getAllUsers)


// Add all products
router.post("/product/add", protect.forAdmin,upload.single("image"), adminController.addProducts)
router.put("/product/:pid", protect.forAdmin, adminController.updateProducts)

// Order Routes
router.put("/order/:oid",protect.forAdmin,adminController.updateOrder)
router.get("/orders", protect.forAdmin, adminController.getAllOrders)
router.get("/orders/:oid", protect.forAdmin, adminController.getSingleOrder)

// review
router.get("/reviews", protect.forAdmin, adminController.getAllReview)

// Coupon routes
router.get("/coupon",protect.forAdmin,adminController.allCoupon)
router.post("/coupon/add", protect.forAdmin, adminController.createCoupon)

 
export default router