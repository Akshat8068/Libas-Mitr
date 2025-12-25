import express from "express"
import colors from "colors"
import connectDB from "./config/dbConfig.js"
import dotenv from "dotenv"
// Local Routes

import authRoutes from "./routes/authRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import couponRoutes from "./routes/couponRoutes.js"
import virtualTryOnRoutes from "./routes/virtualTryOnRoutes.js"
import errorHandler from "./middleware/errorHandler.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// connectDB
connectDB()

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello LibasMitr Eskill")
})

// authRoutes
app.use("/api/auth",authRoutes)

// order routes
app.use("/api/order",orderRoutes)

// admin routes
app.use("/api/admin", adminRoutes)

// product Routes
app.use("/api/products", productRoutes)

// cart Routes
app.use("/api/cart", cartRoutes)

// coupon routes
app.use("/api/coupon", couponRoutes)

// virtual Try On Routes

app.use("/api/virtual_tryon",virtualTryOnRoutes)

// Error Handler
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgBlue.black)
})