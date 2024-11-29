import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {COLORS, FONTS} from '../constants/themes';
import {Icon, IconButton} from 'react-native-paper';

interface CalendarProps {
  selectedDate: string | string[];
  onDateSelect: (date: string | string[]) => void;
  selectedDateColor: string;
  selectedDateTextColor: string;
  todayTextColor: string;
  numOfRows: number;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  selectedDateColor,
  selectedDateTextColor,
  todayTextColor,
  numOfRows,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDayOfMonth = getFirstDayOfMonth(month, year);
    const daysInCurrentMonth = daysInMonth(month, year);
    const totalDays = firstDayOfMonth + daysInCurrentMonth;
    const numRows = Math.ceil(totalDays / 7);
    const days: {
      day: number | string;
      isCurrentMonth: boolean;
      isToday: boolean;
    }[] = [];
    for (let i = 0; i < numRows * 7; i++) {
      if (i >= firstDayOfMonth && i < firstDayOfMonth + daysInCurrentMonth) {
        const day = i - firstDayOfMonth + 1;
        const isToday =
          today.getDate() === day &&
          today.getMonth() === month &&
          today.getFullYear() === year;

        days.push({
          day,
          isCurrentMonth: true,
          isToday: isToday,
        });
      } else {
        days.push({
          day: '',
          isCurrentMonth: false,
          isToday: false,
        });
      }
    }

    return days;
  };
  const handleDatePress = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      const selectedDateStr = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      )
        .toISOString()
        .split('T')[0];

      if (Array.isArray(selectedDate)) {
        if (selectedDate.includes(selectedDateStr)) {
          onDateSelect(selectedDate.filter(date => date !== selectedDateStr));
        } else {
          onDateSelect([...selectedDate, selectedDateStr]);
        }
      } else {
        onDateSelect(selectedDateStr);
      }
    }
  };
  const changeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  const days = generateCalendarDays();
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={styles.container}>
      {/* Month Navigation */}
      <View style={styles.header}>
        <IconButton
          icon="chevron-left"
          size={24}
          iconColor={COLORS.primary}
          onPress={() => changeMonth(-1)}
          style={{padding: 0}}
        />
        <Text style={styles.month}>
          {currentDate.toLocaleString('default', {month: 'long'})}{' '}
          {currentDate.getFullYear()}
        </Text>
        <IconButton
          icon="chevron-right"
          iconColor={COLORS.primary}
          size={24}
          onPress={() => changeMonth(1)}
          style={{padding: 0}}
        />
      </View>
      {/* Weekday Labels */}
      <View style={styles.weekDays}>
        {dayLabels.map(label => (
          <Text key={label} style={styles.weekDay}>
            {label}
          </Text>
        ))}
      </View>
      {/* Calendar Grid */}
      <FlatList
        data={days}
        numColumns={7}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.day,
              item.isCurrentMonth &&
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                Number(item.day),
              )
                .toISOString()
                .split('T')[0] === selectedDate
                ? {
                    backgroundColor: selectedDateColor,
                  }
                : item.isCurrentMonth &&
                  Array.isArray(selectedDate) &&
                  selectedDate.includes(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      Number(item.day),
                    )
                      .toISOString()
                      .split('T')[0],
                  )
                ? {
                    backgroundColor: selectedDateColor,
                  }
                : null,
            ]}
            onPress={() =>
              handleDatePress(item.day as number, item.isCurrentMonth)
            }>
            <Text
              style={[
                styles.dayText,
                item.isToday ? {color: todayTextColor} : null,
                item.isCurrentMonth &&
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  Number(item.day),
                )
                  .toISOString()
                  .split('T')[0] === selectedDate
                  ? {color: selectedDateTextColor}
                  : null,
              ]}>
              {item.day}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    height: 350,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  arrow: {
    fontSize: 24,
  },
  month: {
    fontSize: 18,
    fontFamily: FONTS.SemiBold,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 12,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  weekDay: {
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    padding: 6,
    marginVertical: 5,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  selectedDay: {
    backgroundColor: '#4CAF50',
  },
  dayText: {
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
  },
  currentMonthDay: {
    color: '#000',
  },
  otherMonthDay: {
    color: '#bbb',
  },
});

export default Calendar;
