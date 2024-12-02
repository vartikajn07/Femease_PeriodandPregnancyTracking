import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Calendar from '../../../common/Calendar';
import {
  AppText,
  MEDIUM,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';

interface StepProps {
  onNext: () => void;
}

const Step1: React.FC<StepProps> = ({onNext}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateSelect = (date: string | string[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

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
            style={{textAlign: 'center'}}>
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
        />
      </View>
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}>
        <AppText
          weight={MEDIUM}
          type={SIXTEEN}
          color={WHITE}
          style={{textAlign: 'center'}}>
          Next
        </AppText>
      </TouchableOpacity>
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
