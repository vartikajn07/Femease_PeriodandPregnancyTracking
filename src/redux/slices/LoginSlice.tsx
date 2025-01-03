import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../API/api';


const initialState = {
  token: null as string | null,
  loading: false,
  error: null as string | null,
  success: false,
};

export const loginUser = createAsyncThunk<string, Record<string, any>, { rejectValue: string }>(
  'auth/loginUser',
  async (userData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await loginApi(userData);
      console.log('Token:', response.token);
      return response.token;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearAuthError, logout } = loginSlice.actions;

export default loginSlice.reducer;
