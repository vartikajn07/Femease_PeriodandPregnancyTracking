import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice"
import loginReducer from "./slices/LoginSlice"
import OnboardingtoPeriodReducer from "./slices/OnboardingSlice"
import periodStartDateReducer from "./slices/PeriodStartSlice"
import periodLengthReducer from "./slices/PeriodLengthSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer, //register user
    login: loginReducer,
    onboardingtoPeriod: OnboardingtoPeriodReducer,
    periodStart: periodStartDateReducer,
    periodLength: periodLengthReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
