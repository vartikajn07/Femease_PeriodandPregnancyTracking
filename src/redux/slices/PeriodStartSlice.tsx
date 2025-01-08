//period start date logging slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { periodstartApi } from '../../API/api';

interface PeriodStartState {
    date: string | null;
    loading: boolean;
    success: boolean;
    error: string | null;
}

export const logPeriodStartDate = createAsyncThunk<
    string,
    { selectedDate: string },
    { rejectValue: string; state: { login: { token: string | null } } }
>(
    'periodStart/logDate',
    async ({ selectedDate }, { getState, rejectWithValue }) => {
        const token = getState().login.token;
        if (!token) {
            return rejectWithValue('Authentication token is missing.');
        }
        try {
            const response = await periodstartApi(token, { date: selectedDate });
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);


const initialState: PeriodStartState = {
    date: null,
    loading: false,
    success: false,
    error: null,
};

const periodStartSlice = createSlice({
    name: 'periodStart',
    initialState,
    reducers: {
        resetPeriodStartState: (state) => {
            state.date = null;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logPeriodStartDate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logPeriodStartDate.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.date = action.payload;
            })
            .addCase(logPeriodStartDate.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetPeriodStartState } = periodStartSlice.actions;
export default periodStartSlice.reducer;
