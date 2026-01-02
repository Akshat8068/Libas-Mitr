import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        adminIsLoading: false,
        adminIsSuccess: false,
        adminIsError: false,
        adminErrorMessage: "",
        allUsers: [],
        allProducts: [],
        allOrders: [],
        allCoupons:[]
        
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage=""
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allUsers=action.payload
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(getAllOrders.pending, (state, action) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allOrders = action.payload
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
  }
});

export const {} = adminSlice.actions

export default adminSlice.reducer


// Get All Users
export const getAllUsers = createAsyncThunk("FETCH/USERS", async (_, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  
  try {
    return await adminService.fetchAllUsers(token)
    
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
  }
})
// Get All Users
export const getAllOrders = createAsyncThunk("FETCH/ORDERS", async (_, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token

  try {
    return await adminService.fetchAllOrders(token)

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})