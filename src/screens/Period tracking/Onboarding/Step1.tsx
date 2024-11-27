import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';
import Calendar from '../../../common/Calendar';

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
          <Text style={styles.headingText}>
            When did your last period start?
          </Text>
        </View>
        {/* Add your date picker or input here */}
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
        <Text
          style={{
            textAlign: 'center',
            color: '#ffff',
            fontFamily: FONTS.Medium,
            fontSize: 16,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 40,
  },
  containerheading: {
    marginHorizontal: 'auto',
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'center',
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

{
  /* <Calendar
  onDayPress={handleDateSelect}
  markedDates={{
    [selectedDate]: {
      selected: true,
      selectedColor: '#FF6161',
      selectedTextColor: 'white',
    },
  }}
  monthFormat={'MMMM yyyy'}
  theme={{
    textDayFontFamily: FONTS.Regular,
    textMonthFontFamily: FONTS.SemiBold,
    todayTextColor: '#E392A1',
    arrowColor: '#E392A1',
  }}
/>; */
}
