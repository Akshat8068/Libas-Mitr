import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productIsLoading: false,
        productIsSuccess: false,
        productIsError: false,
        productIsErrorMessage: false,
        products: [],
        product: {},
        productReviews:[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending,(state, action) => {
            state.productIsLoading = true
            state.productIsSuccess = false
            state.productIsError = false
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productIsLoading = false
            state.productIsSuccess= true
            state.products= action.payload 
            state.productIsError = false
            state.productIsErrorMessage = ""
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productIsLoading = false
            state.productIsSuccess= false
            state.productIsError= true
            state.productIsErrorMessage = action.payload
        })
            .addCase(getProduct.pending, (state, action) => {
                state.productIsLoading = true
                state.productIsSuccess = false
                state.productIsError = false
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = true
                state.product = action.payload
                state.productIsError = false
                state.productIsErrorMessage = ""
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = false
                state.productIsError = true
                state.productIsErrorMessage = action.payload
            })
            .addCase(getProductReview.pending, (state, action) => {
                state.productIsLoading = true
                state.productIsSuccess = false
                state.productIsError = false
            })
            .addCase(getProductReview.fulfilled, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = true
                state.productReviews = action.payload
                state.productIsError = false
                state.productIsErrorMessage = ""
            })
            .addCase(getProductReview.rejected, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = false
                state.productIsError = true
                state.productIsErrorMessage = action.payload
            })
            .addCase(addProductReview.pending, (state, action) => {
                state.productIsLoading = true
                state.productIsSuccess = false
                state.productIsError = false
            })
            .addCase(addProductReview.fulfilled, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = true
                state.productReviews = [action.payload,...state.productReviews]
                state.productIsError = false
                state.productIsErrorMessage = ""
            })
            .addCase(addProductReview.rejected, (state, action) => {
                state.productIsLoading = false
                state.productIsSuccess = false
                state.productIsError = true
                state.productIsErrorMessage = action.payload
            })
    }
})

export default productSlice.reducer

// Get All Products
export const getProducts = createAsyncThunk("GET/PRODUCTS", async (_, thunkAPI) => {

    try {
        return await productService.fetchAllProducts()

    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)

    }
})
// Get Single Products
export const getProduct = createAsyncThunk("GET/PRODUCT", async (pid, thunkAPI) => {

    try {
        return await productService.fetchSingleProduct(pid)

    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)

    }
})

// Get Product Review
export const getProductReview = createAsyncThunk("GET/PRODUCT_REVIEW", async (pid, thunkAPI) => {

    try {
        return await productService.fetchProductReview(pid)

    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)

    }
})

// Add product review
export const addProductReview = createAsyncThunk("ADD/PRODUCT_REVIEW", async (reviewData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await productService.postProductReview(token, reviewData)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})