import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
} from 'react-native';
import {addDays, eachDayOfInterval, format, subDays} from 'date-fns';
import {AppText, FOURTEEN, SEMI_BOLD, SIXTEEN} from '../../common/AppText';
import {COLORS} from '../../constants/themes';
import {IconButton} from 'react-native-paper';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width / 8;
interface DayItem {
  date: Date;
  formattedDay: string;
  formattedDate: string;
}

const PeriodTracker: React.FC = () => {
  const today = new Date();

  // (60 days range: 30 days before and after today)
  const days: DayItem[] = eachDayOfInterval({
    start: subDays(today, 30),
    end: addDays(today, 30),
  }).map(date => ({
    date,
    formattedDay: format(date, 'EEEEE'),
    formattedDate: format(date, 'd'),
  }));
  const [currentIndex, setCurrentIndex] = useState(30);
  const flatListRef = useRef<FlatList<DayItem>>(null);

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({
      animated: false,
      index: currentIndex,
      viewPosition: 0.3,
    });
  }, []);

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
    console.warn('ScrollToIndex failed, attempting recovery...');
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: Math.max(0, Math.min(error.index, days.length - 1)),
        animated: true,
      });
    }
  };

  return (
    <View style={styles.parentContainer}>
      {/* Marker for current day */}
      <View style={styles.marker}>
        <AppText type={SIXTEEN} weight={SEMI_BOLD}>
          {format(days[currentIndex].date, 'EEEE, MMM d')}
        </AppText>
      </View>
      {/* FlatList scrolling for days */}
      <FlatList
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
              <AppText weight={SEMI_BOLD} type={SIXTEEN}>
                {item.formattedDay}
              </AppText>
              <AppText weight={SEMI_BOLD} type={FOURTEEN}>
                {item.formattedDate}
              </AppText>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxHeight: 180,
    gap: 20,
  },
  marker: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  markerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  flatListContent: {
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    backgroundColor: 'beige',
    height: 100,
  },
  dayContainer: {
    width: ITEM_WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 10,
    marginVertical: 15,
    maxHeight: 80,
  },
  currentDayContainer: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 8,
  },
});

export default PeriodTracker;
