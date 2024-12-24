import React, {useRef, useState, memo} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';
import {eachDayOfInterval, addMonths, format, subDays, addDays} from 'date-fns';
import {
  AppText,
  ELEVEN,
  MEDIUM,
  NORMAL,
  SEMI_BOLD,
  SIXTEEN,
  TWELVE,
} from '../../common/AppText';
import {COLORS} from '../../constants/themes';
import {Icon, IconButton} from 'react-native-paper';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width / 8;

interface DayItem {
  date: Date;
  formattedDay: string;
  formattedDate: string;
}
const today = new Date();

const days: DayItem[] = eachDayOfInterval({
  start: subDays(today, 150),
  end: addDays(today, 150),
}).map(date => ({
  date,
  formattedDay: format(date, 'EEEEE'),
  formattedDate: format(date, 'd'),
}));

const PeriodTracker: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const initialIndex = days.findIndex(
    day => format(day.date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd'),
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const flatListRef = useRef<FlatList<DayItem>>(null);

  // Handle month navigation
  const changeMonth = (direction: number) => {
    const newDate = addMonths(currentDate, direction);
    setCurrentDate(newDate);
    const firstDayIndex = days.findIndex(
      day => format(day.date, 'yyyy-MM') === format(newDate, 'yyyy-MM'),
    );
    setCurrentIndex(firstDayIndex);
    requestAnimationFrame(() => {
      flatListRef.current?.scrollToIndex({
        animated: false,
        index: firstDayIndex,
        viewPosition: 0.3,
      });
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    requestAnimationFrame(() => {
      const index = Math.round(offsetX / ITEM_WIDTH);
      setCurrentIndex(index);
    });
    // const index = Math.floor(offsetX / ITEM_WIDTH);
    // setCurrentIndex(index);
  };
  // layout item
  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });
  // Handle scrollToIndex failure
  const handleScrollToIndexFailed = (error: {
    index: number;
    highestMeasuredFrameIndex: number;
  }) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: Math.max(0, Math.min(error.index, days.length - 1)),
        animated: true,
      });
    }
  };
  return (
    <View style={styles.parentContainer}>
      {/* top content */}
      <View style={styles.marker}>
        {/* <View style={{flex: 1, alignItems: 'center', marginBottom: 3}}>
          <IconButton
            icon="calendar"
            size={18}
            iconColor={COLORS.black}
            onPress={() => changeMonth(-1)}
            style={{padding: 0}}
          />
        </View> */}
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconButton
              icon="chevron-left"
              size={18}
              iconColor={COLORS.black}
              onPress={() => changeMonth(-1)}
            />
            <AppText style={{bottom: 4}} type={SIXTEEN} weight={SEMI_BOLD}>
              {format(days[currentIndex].date, 'MMMM')}
            </AppText>
            <IconButton
              icon="chevron-right"
              size={18}
              iconColor={COLORS.black}
              onPress={() => changeMonth(1)}
              style={{padding: 0}}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'lavender',
            }}>
            <AppText type={ELEVEN} weight={NORMAL}>
              {format(days[currentIndex].date, 'EEEE, d')}
            </AppText>
            <AntdesignIcon name="caretdown" />
          </View>
        </View>
      </View>
      {/* FlatList scrolling for days */}
      <FlatList
        style={{height: 20}}
        ref={flatListRef}
        horizontal
        data={days}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          const isCurrent = index === currentIndex;
          return (
            <View
              style={[
                styles.dayContainer,
                isCurrent && styles.currentDayContainer,
              ]}>
              <AppText weight={MEDIUM} type={ELEVEN}>
                {item.formattedDay}
              </AppText>
              <AppText weight={SEMI_BOLD} type={TWELVE}>
                {item.formattedDate}
              </AppText>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        removeClippedSubviews={true}
        windowSize={10}
        initialNumToRender={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    position: 'relative',
    maxHeight: 150, //105 original
    width: width,
    flex: 1,
    flexDirection: 'column',
    gap: 5,
  },
  marker: {
    flex: 1,
    gap: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  flatListContent: {
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    backgroundColor: 'beige',
    paddingVertical: 2,
  },
  dayContainer: {
    width: ITEM_WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    marginVertical: 2,
  },
  currentDayContainer: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 8,
    transform: [{scale: 1.2}],
  },
});

export default PeriodTracker;

// the og range of calendar

//  // ( 90 days before and after today)
//  const days: DayItem[] = eachDayOfInterval({
//   start: subDays(today, 90),
//   end: addDays(today, 90),
// }).map(date => ({
//   date,
//   formattedDay: format(date, 'EEEEE'),
//   formattedDate: format(date, 'd'),

// }));
// const [currentIndex, setCurrentIndex] = useState(90);
// const flatListRef = useRef<FlatList<DayItem>>(null);

// React.useEffect(() => {
//   flatListRef.current?.scrollToIndex({
//     animated: false,
//     index: currentIndex,
//     viewPosition: 0.3,
//   });
// }, []);
