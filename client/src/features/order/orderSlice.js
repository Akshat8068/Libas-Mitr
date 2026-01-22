import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        order: {},
        orderIsLoading: false,
        orderIsSuccess: false,
        orderIsError: false,
        orderIsErrorMessage: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(orderAdd.pending, (state, action) => {
                state.orderIsLoading = true
                state.orderIsSuccess = false
                state.orderIsError = false
            })
            .addCase(orderAdd.fulfilled, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = true
                state.order = action.payload

                state.orderIsError = false
            })
            .addCase(orderAdd.rejected, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = false
                state.orderIsError = true
                state.orderIsErrorMessage = action.payload
            })
            .addCase(getMyOrders.pending, (state, action) => {
                state.orderIsLoading = true
                state.orderIsSuccess = false
                state.orderIsError = false
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = true
                state.orders = action.payload
                state.orderIsError = false
            })
            .addCase(getMyOrders.rejected, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = false
                state.orderIsError = true
                state.orderIsErrorMessage = action.payload
            })
            .addCase(getMyOrder.pending, (state, action) => {
                state.orderIsLoading = true
                state.orderIsSuccess = false
                state.orderIsError = false
            })
            .addCase(getMyOrder.fulfilled, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = true
                state.order = action.payload
                state.orderIsError = false
            })
            .addCase(getMyOrder.rejected, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = false
                state.orderIsError = true
                state.orderIsErrorMessage = action.payload
            })
            .addCase(cancelMyOrder.pending, (state, action) => {
                state.orderIsLoading = true
                state.orderIsSuccess = false
                state.orderIsError = false
            })
            .addCase(cancelMyOrder.fulfilled, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = true
                state.orders = state.orders.map(order => order._id === action.payload.updatedOrder._id ? action.payload.updatedOrder : order)
                state.orderIsError = false
            })
            .addCase(cancelMyOrder.rejected, (state, action) => {
                state.orderIsLoading = false
                state.orderIsSuccess = false
                state.orderIsError = true
                state.orderIsErrorMessage = action.payload
            })
    }
})

export default orderSlice.reducer


export const orderAdd = createAsyncThunk("ADD/ORDER", async (orderDetails, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.addOrder(token, orderDetails)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Get My orders

export const getMyOrders = createAsyncThunk("GET/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.fetchMyOrders(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }


})

// Get My order

export const getMyOrder = createAsyncThunk("GET/ORDER", async (orderId, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.fetchMyOrder(orderId, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Cancle My order

export const cancelMyOrder = createAsyncThunk("CANCEL/ORDER", async (orderId, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.cancleOrder(orderId, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})