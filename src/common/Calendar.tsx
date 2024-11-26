import React from 'react';
import {Calendar as RNCalendar, CalendarProps} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

interface CustomCalendarProps extends CalendarProps {
  selectedDate?: string;
  onDateSelect?: (date: string) => void;
  selectedDateColor?: string;
  selectedDateTextColor?: string;
  todayTextColor?: string;
}

const Calendar: React.FC<CustomCalendarProps> = ({
  selectedDate,
  onDateSelect,
  selectedDateColor = '#FF6161',
  selectedDateTextColor = '#FFFFF',
  todayTextColor = 'E392A1',
}) => {
  const handleDatePress = (day: {dateString: string}) => {
    if (onDateSelect) {
      onDateSelect(day.dateString);
    }
  };

  return (
    <RNCalendar
      onDayPress={handleDatePress}
      markedDates={{
        [selectedDate || '']: {
          selected: true,
          selectedColor: selectedDateColor,
          selectedTextColor: selectedDateTextColor,
        },
      }}
      monthFormat={'MMMM yyyy'}
      theme={{
        textDayFontFamily: 'FONTS.Regular',
        textMonthFontFamily: 'FONTS.SemiBold',
        todayTextColor: todayTextColor,
      }}
    />
  );
};

export default Calendar;

const styles = StyleSheet.create({
  // You can define shared styles here if needed in the future.
});
