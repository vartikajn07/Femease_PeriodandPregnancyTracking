import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import CalendarStrip from 'react-native-calendar-strip';
import {COLORS} from '../../constants/themes';
import moment from 'moment';
import {AppText, SEMI_BOLD, SIXTEEN, THIRTY, WHITE} from '../../common/AppText';

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
      {/* week calendar strip */}
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
      {/* tracker widget */}
      <View
        style={{
          position: 'relative',
          marginTop: 10,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.outerRing} />
        <View style={styles.innerCircle}>
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              bottom: 30,
              left: 43,
            }}>
            <AppText type={SIXTEEN} weight={SEMI_BOLD} color={WHITE}>
              Day
            </AppText>
            <AppText type={THIRTY} weight={SEMI_BOLD} color={WHITE}>
              26
            </AppText>
          </View>
        </View>
      </View>
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
  //tracker widget
  outerRing: {
    width: 230,
    height: 230,
    borderRadius: 120,
    backgroundColor: 'transparent',
    borderWidth: 10,
    borderColor: '#DBA39A',
    position: 'absolute',
  },
  innerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    position: 'absolute',
  },
  innercircletext: {},
});

export default Periodtracker;
