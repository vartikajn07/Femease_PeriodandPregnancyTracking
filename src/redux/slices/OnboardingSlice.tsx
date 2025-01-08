import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { periodOnboardingApi } from '../../API/api';


const initialState = {
    userId: null as string | null,
    loading: false,
    error: null as string | null,
    success: false,
};

export const onboardUser = createAsyncThunk<
    string,
    void,
    { rejectValue: string; state: { login: { token: string | null } } }
>(
    'periodOnboarding/onboardUser',
    async (_, { getState, rejectWithValue }) => {
        const token = getState().login.token;
        if (!token) {
            console.error('Onboarding Failed: Authentication token is missing.');
            return rejectWithValue('Authentication token is missing.');
        }
        try {
            const response = await periodOnboardingApi(token);
            const userId = response.userId;
            console.log('Onboarding Successful! User ID:', userId);
            return userId;
        } catch (error: any) {
            console.error('Onboarding Failed:', error.message || error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const periodOnboardingSlice = createSlice({
    name: 'periodOnboarding',
    initialState,
    reducers: {
        clearOnboardingError: (state) => {
            state.error = null;
        },
        resetOnboarding: (state) => {
            state.userId = null;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(onboardUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(onboardUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.userId = action.payload; //storing tracker id

            })
            .addCase(onboardUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});


export const { clearOnboardingError, resetOnboarding } = periodOnboardingSlice.actions;
export default periodOnboardingSlice.reducer;
