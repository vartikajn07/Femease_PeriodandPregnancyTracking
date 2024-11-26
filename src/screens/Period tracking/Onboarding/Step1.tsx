import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';
import {Calendar} from 'react-native-calendars';

interface StepProps {
  onNext: () => void;
}

const Step1: React.FC<StepProps> = ({onNext}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const handleDateSelect = (date: any) => {
    setSelectedDate(date.dateString);
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
        <View style={styles.calendar}>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#E392A1',
                selectedTextColor: 'white',
              },
            }}
            monthFormat={'MMMM yyyy'}
            theme={{
              textDayFontFamily: FONTS.Regular,
              textMonthFontFamily: FONTS.SemiBold,
              todayTextColor: '#00adf5',
              arrowColor: '#E392A1',
            }}
          />
        </View>
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
    paddingVertical: 20,
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
