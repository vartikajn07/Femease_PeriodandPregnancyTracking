import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Calendar from '../../../common/Calendar';
import {
  AppText,
  GREY,
  MEDIUM,
  RED,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logPeriodStartDate } from '../../../redux/slices/PeriodStartSlice';
import { RootState } from '../../../redux/store';

interface StepProps {
  onNext: () => void;
}
const today = new Date();

const Step1: React.FC<StepProps> = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const dispatch = useAppDispatch();
  const { date, loading, success, error } = useAppSelector(
    (state) => state.periodStart
  );
  const trackerId = useAppSelector((state: RootState) => state.onboardingtoPeriod.periodtrackerId);
  console.log('Tracker ID in Component:', trackerId);
  //logging period start date function
  const handleDateSelect = async (date: string | string[]) => {
    const formattedDate = Array.isArray(date) ? date[0] : date;
    setSelectedDate(formattedDate);
    try {
      const resultAction = await dispatch(logPeriodStartDate({ selectedDate: formattedDate }));
      if (logPeriodStartDate.fulfilled.match(resultAction)) {
        console.log('Period start date logged successfully:', resultAction.payload);
      } else if (logPeriodStartDate.rejected.match(resultAction)) {
        console.error('Failed to log period start date:', resultAction.payload);
      }
    } catch (err) {
      console.error('Error logging period start date:', err);
    }
  };

  //disable future dates 
  const disableDays = (date: Date) => {
    const today = new Date();
    return date > today;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 70,
        }}>
        <View style={styles.containerheading}>
          <AppText
            type={TWENTY}
            weight={SEMI_BOLD}
            style={{ textAlign: 'center' }}>
            When did your last period start?
          </AppText>
        </View>
        {/* global calendar component */}
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          selectedDateColor="#FF6161"
          selectedDateTextColor="#FFFFFF"
          todayTextColor="#E392A1"
          numOfRows={5}
          disableDays={disableDays}
        />
      </View>
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}>
        <AppText
          weight={MEDIUM}
          type={SIXTEEN}
          color={WHITE}
          style={{ textAlign: 'center' }}>
          Next
        </AppText>
      </TouchableOpacity>
      {loading && <AppText color={GREY}>Please wait</AppText>}
      {success && <AppText>We have logged your last period!</AppText>}
      {error && <AppText color={RED}>Error: {error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  containerheading: {
    marginHorizontal: 'auto',
  },
  content: {
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  calendar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '90%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Step1;
