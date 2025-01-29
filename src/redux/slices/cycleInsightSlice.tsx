import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cycleInsightsApi } from '../../API/api'
import { RootState } from '../store';


const initialState = {
    currentDay: null as number | null,
    phase: null as string | null,
    phaseDetails: {} as Record<string, any>,
    predictedNextPeriod: [] as any[],
    predictedNextOvulation: [] as any[],
    fertileWindow: [] as any[],
    cycleDuration: [] as number[],
    cycleMetrics: {} as Record<string, any>,
    loading: false,
    error: null as string | null,
};

interface CycleInsightsResponse {
    currentDay: number;
    phase: string;
    phaseDetails: Record<string, any>;
    predictedNextPeriod: any[];
    predictedNextOvulation: any[];
    fertileWindow: any[];
    cycleDuration: number[];
    cycleMetrics: Record<string, any>;
    error?: string | null
}

export const fetchCycleInsights = createAsyncThunk(
    'cycleInsights/fetchCycleInsights',
    async (_, { getState, rejectWithValue }) => {
        const periodtrackerId = (getState() as RootState).onboardingtoPeriod.periodtrackerId;
        const { lengthInDays } = (getState() as RootState).periodLength
        const { token } = (getState() as RootState).login

        if (!token) {
            return rejectWithValue('Authentication token is missing.');
        }
        if (!periodtrackerId || lengthInDays == null || !token) {
            return rejectWithValue('Missing required data for fetching cycle insights.');
        }
        try {
            const response = await cycleInsightsApi(token, {
                periodTrackerId: periodtrackerId,
                lengthInDays,
            });
            return response.data;
        } catch (error: any) {
            console.error('Update Failed:', error.message || error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const cycleInsightsSlice = createSlice({
    name: 'cycleInsights',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCycleInsights.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCycleInsights.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const data = action.payload as CycleInsightsResponse;
                state.currentDay = data.currentDay;
                state.phase = data.phase;
                state.phaseDetails = data.phaseDetails;
                state.predictedNextPeriod = data.predictedNextPeriod;
                state.predictedNextOvulation = data.predictedNextOvulation;
                state.fertileWindow = data.fertileWindow;
                state.cycleDuration = data.cycleDuration;
                state.cycleMetrics = data.cycleMetrics;
            })
            .addCase(fetchCycleInsights.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Failed to fetch cycle insights.';
            });
    },
});

export default cycleInsightsSlice.reducer;
