import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import virtualTryService from "./virtualTryService";

const virtualTrySlice = createSlice({
  name: 'virtualTry',
  initialState: {
    virtualTryOn: null,
    virtualTryIsLoading: false,
    virtualTryIsSuccess: false,
    virtualTryIsError: false,
    virtualTryErrorMessage: ""
  },
  reducers: {
    resetVirtualTry: (state) => {
      state.virtualTryOn = null;
      state.virtualTryIsLoading = false;
      state.virtualTryIsSuccess = false;
      state.virtualTryIsError = false;
      state.virtualTryErrorMessage = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(virtualCloth.pending, (state) => {
        state.virtualTryIsLoading = true;
        state.virtualTryIsSuccess = false;
        state.virtualTryIsError = false;
        state.virtualTryErrorMessage = "";
      })
      .addCase(virtualCloth.fulfilled, (state, action) => {
        state.virtualTryIsLoading = false;
        state.virtualTryIsSuccess = true;
        state.virtualTryOn = action.payload;
        state.virtualTryIsError = false;
        state.virtualTryErrorMessage = "";
      })
      .addCase(virtualCloth.rejected, (state, action) => {
        state.virtualTryIsLoading = false;
        state.virtualTryIsSuccess = false;
        state.virtualTryIsError = true;
        state.virtualTryErrorMessage = action.payload;
        state.virtualTryOn = null;
      })
  }
});

export const { resetVirtualTry } = virtualTrySlice.actions;
export default virtualTrySlice.reducer;

// Post Product virtualTry
export const virtualCloth = createAsyncThunk(
  "POST/ProductVirtualTry",
  async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await virtualTryService.productVirtualTry(formData, token);
    } catch (error) {
      let message = error.response?.data?.message || error.message || "Virtual Try-On failed";
      return thunkAPI.rejectWithValue(message);
    }
  }
);