import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  startOfMonth,
} from 'date-fns';

const {width} = Dimensions.get('window');

const Periodtracker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Only update weekDates when the currentDate changes
    const updateWeekDates = () => {
      const startOfCurrentWeek = startOfWeek(currentDate, {weekStartsOn: 1}); // Monday as the first day of the week
      const endOfCurrentWeek = endOfWeek(currentDate, {weekStartsOn: 1});
      const weekDays = eachDayOfInterval({
        start: startOfCurrentWeek,
        end: endOfCurrentWeek,
      });
      setWeekDates(weekDays);
    };

    updateWeekDates();

    // Update the current month string
    const monthString = format(currentDate, 'MMMM yyyy');
    setCurrentMonth(monthString);

    // Scroll to the selected date or today's date, but only when weekDates are updated
    if (selectedDate) {
      const selectedIndex = weekDates.findIndex(
        date => date.toDateString() === selectedDate.toDateString(),
      );
      if (selectedIndex !== -1 && flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: selectedIndex,
          animated: true,
        });
      }
    }
  }, [currentDate]); // Dependency array includes only `currentDate`

  useEffect(() => {
    if (weekDates.length > 0 && flatListRef.current) {
      const index = selectedDate
        ? weekDates.findIndex(
            date => date.toDateString() === selectedDate.toDateString(),
          )
        : weekDates.findIndex(
            date => date.toDateString() === currentDate.toDateString(),
          );
      if (index !== -1) {
        flatListRef.current.scrollToIndex({index, animated: true});
      }
    }
  }, [weekDates, selectedDate, currentDate]); // Separate effect to handle scrolling

  // Handle the navigation through months
  const goToNextMonth = () => {
    const nextMonth = addMonths(currentDate, 1);
    setCurrentDate(nextMonth);
  };

  const goToPreviousMonth = () => {
    const prevMonth = subMonths(currentDate, 1);
    setCurrentDate(prevMonth);
  };

  // Handle touch on day
  const handleDayPress = (day: Date) => {
    setSelectedDate(day);
  };

  // Render each day of the week
  const renderDay = ({item}: {item: Date}) => {
    const isToday = item.toDateString() === currentDate.toDateString();
    const isSelected = selectedDate
      ? item.toDateString() === selectedDate.toDateString()
      : false;
    const dayOfWeek = format(item, 'iii'); // Get day abbreviation (Mon, Tue, etc.)

    return (
      <TouchableOpacity
        style={[
          styles.dayContainer,
          isToday && styles.today,
          isSelected && styles.selectedDay,
        ]}
        onPress={() => handleDayPress(item)}>
        <Text
          style={[
            styles.dayText,
            (isToday || isSelected) && styles.activeText,
          ]}>
          {dayOfWeek}
          {'\n'}
          {format(item, 'd')}
        </Text>
      </TouchableOpacity>
    );
  };

  // Handle touch scroll to jump one day left or right
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = width / 7; // Width of a single day item
    const index = Math.floor(contentOffsetX / itemWidth);

    // Adjust the scroll to jump by one day
    if (index !== undefined && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: index >= 0 ? index : 0,
        animated: true,
      });
    }
  };

  // Month navigation to select the first day of the month or selected day
  const handleMonthNavigation = (direction: 'next' | 'previous') => {
    let newDate =
      direction === 'next'
        ? addMonths(currentDate, 1)
        : subMonths(currentDate, 1);
    if (!selectedDate) {
      // If no day is selected, navigate to the first day of the new month
      newDate = startOfMonth(newDate);
    }
    setCurrentDate(newDate);
    setSelectedDate(null); // Reset selected date when changing month
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthNavigation}>
        <TouchableOpacity onPress={() => handleMonthNavigation('previous')}>
          <Text style={styles.chevron}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentMonth}</Text>
        <TouchableOpacity onPress={() => handleMonthNavigation('next')}>
          <Text style={styles.chevron}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={weekDates}
        renderItem={renderDay}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weekStrip}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  chevron: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekStrip: {
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  dayContainer: {
    width: width / 10, // Each day takes 1/7 of the screen width
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 15,
  },
  dayText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  today: {
    backgroundColor: '#ffeb3b', // Yellow for the current day
  },
  selectedDay: {
    backgroundColor: '#4CAF50', // Green for selected day
  },
  activeText: {
    color: '#fff',
  },
});

export default Periodtracker;
