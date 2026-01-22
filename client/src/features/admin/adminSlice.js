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
    singleProduct: null,
    allOrders: [],
    allCoupons: [],
    allReviews:[],
    productEdit: {
      product:{},isEdit:false
    }

  },
  reducers: {
    clearSingleProduct: (state) => {
      state.singleProduct = null;
      state.adminIsError = false;
      state.adminErrorMessage = "";
    },
    editProduct: (state, action) => {
      return {
        ...state,
        productEdit: { product: action.payload, isEdit: true }
      }
    },
    // ✅ Add this
    clearProductEdit: (state) => {
      state.productEdit = { product: {}, isEdit: false };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allUsers = action.payload
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
      .addCase(updateUser.pending, (state, action) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allUsers = state.allUsers.map(user => user._id === action.payload._id ? action.payload : user)
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allProducts = action.payload
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
        state.singleProduct = null
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.singleProduct = action.payload
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
        state.singleProduct = null
      })
      .addCase(createProduct.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allProducts = [...state.allProducts, action.payload]  // Add new product to list
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(productUpdate.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(productUpdate.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allProducts = state.allProducts.map(product => product._id === action.payload._id ? action.payload : product)
        state.productEdit={product:{},isEdit:false}
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(productUpdate.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(orderUpdate.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(orderUpdate.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allOrders = state.allOrders.map(order => order._id === action.payload._id ? action.payload : order)
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(orderUpdate.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(getAllCoupons.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allCoupons = action.payload
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllCoupons.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(createCoupon.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allCoupons = [action.payload,...state.allCoupons]
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      .addCase(getAllReviews.pending, (state) => {
        state.adminIsLoading = true
        state.adminIsSuccess = false
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = true
        state.allReviews = action.payload 
        state.adminIsError = false
        state.adminErrorMessage = ""
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.adminIsLoading = false
        state.adminIsSuccess = false
        state.adminIsError = true
        state.adminErrorMessage = action.payload
      })
      

  }
});

export const { editProduct, clearProductEdit } = adminSlice.actions

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
// Get All orders
export const getAllOrders = createAsyncThunk("FETCH/ORDERS", async (_, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token

  try {
    return await adminService.fetchAllOrders(token)

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})
// Get All Coupons
export const getAllCoupons = createAsyncThunk("FETCH/COUPONS", async (_, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token

  try {
    return await adminService.fetchAllCoupons(token)

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})
// Get All Reviews
export const getAllReviews = createAsyncThunk("FETCH/REVIEWS", async (_, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token

  try {
    return await adminService.fetchAllReviews(token)

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})
// Update All Users
export const updateUser = createAsyncThunk("FETCH/UPDATEUSER", async (userData, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token

  try {
    return await adminService.userUpdate(userData, token)

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})

// Get All Admin Products
export const getAllProducts = createAsyncThunk("GET/ADMIN/PRODUCTS", async (_, thunkAPI) => {
  
  try {
    return await adminService.getProducts()

  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)

  }
})
// Get Single Admin Product
export const getSingleProduct = createAsyncThunk("GET/ADMIN/SINGLEPRODUCT", async (productId, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  try {
    return await adminService.getAdminSingleProduct(productId, token)
  } catch (error) {
    let message = error.response?.data?.message || error.message
    return thunkAPI.rejectWithValue(message)
  }
})
// Post Admin ADD Product
export const createProduct = createAsyncThunk("POST/ADMIN/ADDPRODUCT", async (productForm, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  try {
    return await adminService.addProduct(productForm, token)
  } catch (error) {
    let message = error.response?.data?.message || error.message
    return thunkAPI.rejectWithValue(message)
  }
})
// Post Admin Update Product
export const productUpdate = createAsyncThunk("POST/ADMIN/UPDATEPRODUCT", async (productForm, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  let productID=thunkAPI.getState().admin.productEdit.product._id
  try {
    return await adminService.updateProduct(productForm,productID, token)
  } catch (error) {
    let message = error.response?.data?.message || error.message
    return thunkAPI.rejectWithValue(message)
  }
})
// Post Admin Update Order
export const orderUpdate = createAsyncThunk("POST/ADMIN/UPDATEORDER", async (orderdetailes, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  try {
    return await adminService.updateOrder(orderdetailes, token)
  } catch (error) {
    let message = error.response?.data?.message || error.message
    return thunkAPI.rejectWithValue(message)
  }
})
// Post Admin ADD Coupon
export const createCoupon = createAsyncThunk("POST/ADMIN/ADDCOUPON", async (formData, thunkAPI) => {
  let token = thunkAPI.getState().auth.user.token
  try {
    return await adminService.addCoupon(formData, token)
  } catch (error) {
    let message = error.response?.data?.message || error.message
    return thunkAPI.rejectWithValue(message)
  }
})