import axios from "axios"

const productVirtualTry = async (formData, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post("/api/virtual_tryon", formData, options)
    return response.data
}

const virtualTryService = {productVirtualTry}
export default virtualTryService