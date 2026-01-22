import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartIsLoading: false,
        cartIsSuccess: false,
        cartIsError: false,
        cartIsErrorMessage: "",
        cart: [],
        coupon: null,
        couponIsLoading:false,
        couponIsSuccess: false,
        couponIsError: false,
        couponIsErrorMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addItemcart.pending, (state, action) => {
                state.cartIsLoading = true
                state.cartIsSuccess = false
                state.cartIsError = false
            })
            .addCase(addItemcart.fulfilled, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = true
                state.cart = action.payload
                state.cartIsError = false
            })
            .addCase(addItemcart.rejected, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = false
                state.cartIsError = true
                state.cartIsErrorMessage = action.payload
            })
            .addCase(getCart.pending, (state, action) => {
                state.cartIsLoading = true
                state.cartIsSuccess = false
                state.cartIsError = false
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = true
                state.cart = action.payload
                state.cartIsError = false
            })
            .addCase(getCart.rejected, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = false
                state.cartIsError = true
                state.cartIsErrorMessage = action.payload
            })
            .addCase(removeCart.pending, (state, action) => {
                state.cartIsLoading = true
                state.cartIsSuccess = false
                state.cartIsError = false
            })
            .addCase(removeCart.fulfilled, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = true
                state.cart = action.payload
                state.cartIsError = false
            })
            .addCase(removeCart.rejected, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = false
                state.cartIsError = true
                state.cartIsErrorMessage = action.payload
            })
            // ✅ Add updateCart cases
            .addCase(updateCart.pending, (state, action) => {
                state.cartIsLoading = true
                state.cartIsSuccess = false
                state.cartIsError = false
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = true
                state.cart = action.payload
                state.cartIsError = false
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.cartIsLoading = false
                state.cartIsSuccess = false
                state.cartIsError = true
                state.cartIsErrorMessage = action.payload
            })
            .addCase(couponCart.pending, (state, action) => {
                state.couponIsLoading = true
                state.couponIsSuccess = false
                state.couponIsError = false
            })
            .addCase(couponCart.fulfilled, (state, action) => {
                state.couponIsLoading = false
                state.couponIsSuccess = true
                state.coupon = action.payload
                state.couponIsError = false
            })
            .addCase(couponCart.rejected, (state, action) => {
                state.couponIsLoading = false
                state.couponIsSuccess= false
                state.couponIsError = true
                state.couponIsErrorMessage = action.payload
            })
    }
})

export default cartSlice.reducer

// POST add to cart
export const addItemcart = createAsyncThunk("ADD/Cart", async (cartData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token

    try {
        return await cartService.addtoCart(token, cartData)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Cart
export const getCart = createAsyncThunk("FETCH/CART", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token

    try {
        return await cartService.fetchCart(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// ✅ Updated to pass variant details
export const removeCart = createAsyncThunk("REMOVE/CART", async ({ productId, colorName, size }, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token

    try {
        return await cartService.cartRemoveItem(token, { productId, colorName, size })
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// ✅ New update cart action
export const updateCart = createAsyncThunk("UPDATE/CART", async ({ productId, colorName, size, qty }, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token

    try {
        return await cartService.cartUpdateItem(token, { productId, colorName, size, qty })
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
// Post and Get Coupon on Cart
export const couponCart = createAsyncThunk("GET_ADD/COUPON", async (couponCode, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await cartService.applyCouponToCart(token, couponCode)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})