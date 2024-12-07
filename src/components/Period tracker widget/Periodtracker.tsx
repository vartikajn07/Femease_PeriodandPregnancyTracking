import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import CalendarStrip from 'react-native-calendar-strip';
import {COLORS} from '../../constants/themes';
import moment from 'moment';

const Periodtracker = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const handleDateSelect = (date: moment.Moment) => {
    setSelectedDate(date);
  };
  const goToNextMonth = () => {
    const nextMonth = selectedDate.clone().add(1, 'months');
    setSelectedDate(nextMonth);
  };
  const goToPreviousMonth = () => {
    const prevMonth = selectedDate.clone().subtract(1, 'months');
    setSelectedDate(prevMonth);
  };
  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.leftchevronstyle}
          onPress={goToPreviousMonth}>
          <IconButton
            icon="chevron-left"
            size={30}
            iconColor={COLORS.black}
            style={{padding: 0}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightchevronstyle}
          onPress={goToNextMonth}>
          <IconButton
            icon="chevron-right"
            size={30}
            iconColor={COLORS.black}
            style={{padding: 0}}
          />
        </TouchableOpacity>
      </View>
      <CalendarStrip
        style={styles.calendar}
        scrollable
        selectedDate={selectedDate}
        onDateSelected={handleDateSelect}
        calendarHeaderStyle={{color: '#000', fontSize: 16}}
        dateNumberStyle={{color: '#000', fontSize: 14}}
        dateNameStyle={{color: '#000', fontSize: 12}}
        highlightDateNumberStyle={{color: COLORS.primary}}
        highlightDateNameStyle={{color: COLORS.primary}}
        upperCaseDays={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    position: 'relative',
    height: 100,
    width: 380,
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftchevronstyle: {
    position: 'absolute',
    zIndex: 2,
    left: 70,
  },
  rightchevronstyle: {
    position: 'absolute',
    zIndex: 2,
    left: 250,
  },
  chevron: {
    paddingHorizontal: 10,
  },
  weekStrip: {
    backgroundColor: COLORS.alabaster_orange,
  },
});

export default Periodtracker;
