import axios from "axios"
const API_URL="/api/order"
const addOrder = async (token, orderDetails) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, orderDetails, options)
    return response.data
}
const fetchMyOrders = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL , options)
    return response.data
}

const fetchMyOrder = async (orderId, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    // Fixed: Added proper URL construction with /
    const response = await axios.get(`${API_URL}/${orderId}`, options)
    return response.data
}
const cancleOrder = async (orderId, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    // Fixed: Added proper URL construction with /
    const response = await axios.put(`${API_URL}/${orderId}`, { status:"cancelled"}, options)
    return response.data
}
const orderService = { addOrder, fetchMyOrders, fetchMyOrder,cancleOrder }


export default orderService