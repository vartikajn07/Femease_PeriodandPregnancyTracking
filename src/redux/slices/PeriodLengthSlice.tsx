import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { periodLengthApi } from '../../API/api';

interface Period {
    id: string;
    startDate: string;
    endDate: string;
    cycleLength: number | null;
    periodTrackerId: string;
    createdAt: string;
    updatedAt: string;
}

interface PeriodLengthState {
    success: boolean;
    loading: boolean;
    error: string | null;
    message: string | null;
    period: Period | null;
}

const initialState: PeriodLengthState = {
    success: false,
    loading: false,
    error: null,
    message: null,
    period: null,
};


export const updatePeriodLength = createAsyncThunk<
    { message: string; period: Period },
    { periodTrackerId: string; lengthInDays: number },
    { rejectValue: string; state: { login: { token: string | null } } }
>(
    'periodLength/updatePeriodLength',
    async (data, { getState, rejectWithValue }) => {
        const token = getState().login.token;
        if (!token) {
            console.error('Update Failed: Authentication token is missing.');
            return rejectWithValue('Authentication token is missing.');
        }
        try {
            const response = await periodLengthApi(token, data);
            console.log('Period length updated successfully:', response);
            return {
                message: response.data.message,
                period: response.data.period,
            };
        } catch (error: any) {
            console.error('Update Failed:', error.message || error);
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
            state.message = null;
            state.period = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updatePeriodLength.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePeriodLength.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.period = action.payload.period;
                console.log('Server response:', action.payload);
            })
            .addCase(updatePeriodLength.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearPeriodLengthError, resetPeriodLengthState } = periodLengthSlice.actions;
export default periodLengthSlice.reducer;
