import axios from "axios"

const API_URL = "/api/products"

const fetchAllProducts = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const fetchSingleProduct = async (pid) => {
    const response = await axios.get(`${API_URL}/${pid}`)
    return response.data
}

const fetchProductReview = async (pid) => {
    const response = await axios.get(`${API_URL}/${pid}/review`)
    return response.data
}

const postProductReview = async (token, reviewData) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    // FIXED: Send only text and rating, not the _id in the body
    const response = await axios.post(
        `${API_URL}/${reviewData._id}/review`,
        {
            text: reviewData.text,
            rating: reviewData.rating
        },
        options
    )
    return response.data
}

const productService = {
    fetchAllProducts,
    fetchSingleProduct,
    fetchProductReview,
    postProductReview
}

export default productService