import axios from "axios"

const addtoCart = async (token, cartData) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post("/api/cart", cartData, options)
    return response.data
}

const fetchCart = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/cart", options)
    return response.data
}

// ✅ Now accepts productId, colorName, size
const cartRemoveItem = async (token, { productId, colorName, size }) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        },
        params: { colorName, size } // Send as query params
    }
    const response = await axios.delete("/api/cart/" + productId, options)
    return response.data
}

// ✅ New function to update cart quantity
const cartUpdateItem = async (token, { productId, colorName, size, qty }) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put("/api/cart", { productId, colorName, size, qty }, options)
    return response.data
}
const applyCouponToCart = async (token, couponCode) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post("/api/coupon", { couponCode }, options)
    return response.data
}
const cartService = { addtoCart, fetchCart, cartRemoveItem, cartUpdateItem, applyCouponToCart }
export default cartService