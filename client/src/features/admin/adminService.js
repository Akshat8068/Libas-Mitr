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
    const response = await axios.get(API_URL + "/users", options)
    return response.data
}

const adminService = { fetchAllUsers,fetchAllOrders }
export default adminService