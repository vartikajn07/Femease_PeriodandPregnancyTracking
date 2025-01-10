import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { periodLengthApi } from '../../API/api';

interface PeriodLengthState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: PeriodLengthState = {
    loading: false,
    success: false,
    error: null,
};

export const updatePeriodLength = createAsyncThunk<
    string,
    { days: number; periodtrackerId: string },
    { rejectValue: string; state: { login: { token: string | null }; onboardingtoPeriod: { periodtrackerId: string | null } } }
>(
    'periodLength/update',
    async ({ days, periodtrackerId }, { getState, rejectWithValue }) => {
        const token = getState().login.token;

        if (!token) {
            console.error('Failed: Authentication token is missing.');
            return rejectWithValue('Authentication token is missing.');
        }
        if (!periodtrackerId) {
            console.error('Failed: Tracker ID is missing.');
            return rejectWithValue('Tracker ID is missing.');
        }
        try {
            const response = await periodLengthApi(token, {
                periodtrackerId,
                lengthInDays: days,
            });
            console.log('Period length updated successfully:', response);
            return response.data;
        } catch (error: any) {
            console.error('Failed to update period length:', error.message || error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const periodLengthSlice = createSlice({
    name: 'periodLength',
    initialState,
    reducers: {
        clearPeriodLengthError: (state) => {
            state.error = null;
        },
        resetPeriodLengthState: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updatePeriodLength.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(updatePeriodLength.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                console.log('Success Message:', action.payload);
            })
            .addCase(updatePeriodLength.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload || 'Failed to update period length.';
            });
    },
});

export const { clearPeriodLengthError, resetPeriodLengthState } = periodLengthSlice.actions;
export default periodLengthSlice.reducer;
