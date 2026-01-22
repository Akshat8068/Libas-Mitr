import axios from "axios"

const API_URL="/api/admin"
const fetchAllUsers = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/users", options)
    return response.data
}
const fetchAllOrders = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/orders", options)
    return response.data
}
const fetchAllCoupons = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/coupon", options)
    return response.data
}
const fetchAllReviews = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/reviews", options)
    return response.data
}

const userUpdate = async (userData, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + "/users/" + userData.userId, userData, options)
    return response.data
}
const addProduct = async (formData, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL + "/product/add", formData, options)
    return response.data
}
const updateProduct = async (formData,productID, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.put(API_URL + "/product/"+ productID, formData, options)
    return response.data
}
const getProducts = async () => {
    const response = await axios.get("/api/products")
    return response.data
}

const getAdminSingleProduct = async (productId, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/product/" + productId, options)
    return response.data
}

const updateOrder = async (orderdetailes, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + "/order/" + orderdetailes.orderId, orderdetailes, options)
    return response.data
}

const addCoupon = async (formData, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL + "/coupon/add", formData, options)
    return response.data
}

const adminService = { fetchAllUsers,fetchAllOrders,fetchAllReviews,fetchAllCoupons,userUpdate,getProducts, getAdminSingleProduct,addProduct,updateProduct,updateOrder,addCoupon}
export default adminService