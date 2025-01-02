import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppText,
  EIGHTEEN,
  FOURTEEN,
  MEDIUM,
  NORMAL,
  PRIMARY,
  SEMI_BOLD,
  SIXTEEN,
  THIRTEEN,
  TWELVE,
  WHITE,
} from '../../common/AppText';
import { BottomDrawer } from '../../components/Drawer';
import { AppSafeAreaView } from '../../common/AppSafeAreaView';
import { COLORS } from '../../constants/themes';
import { RadioButton } from 'react-native-paper';
import { CalendarList } from 'react-native-calendars';
import { Header } from '../../components/Header';
import NavigationService from '../../routes/NavigationService';
import Tooltip from 'react-native-walkthrough-tooltip';
import FastImage from 'react-native-fast-image';
import Images from '../../assets';
import Tracker from '../../components/Period tracker widget/Tracker';

type DayObject = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};
interface ActivityDrawerContentProps {
  isChecked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

const PeriodTrackingHome = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [visiblePopover, setVisiblePopover] = useState<number | null>(null);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState<string>('');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  const popovers = [
    {
      id: 1,
      title: 'Periods',
      image: Images.HOMESCREEN_NOTATION_PERIOD,
      style: {
        width: 28,
        height: 28,
      },
      tooltipstyle: { backgroundColor: COLORS.red },
    },
    {
      id: 2,
      title: 'Protected sex',
      image: Images.HOMESCREEN_NOTATION_PROTECTEDSEX,
      style: {
        width: 30,
        height: 30,
      },
      tooltipstyle: { backgroundColor: COLORS.pink },
    },
    {
      id: 3,
      title: 'Unprotected sex',
      image: Images.HOMESCREEN_NOTATION_HEART,
      style: {
        width: 30,
        height: 30,
      },
      tooltipstyle: { backgroundColor: COLORS.pink },
    },
    {
      id: 4,
      title: 'Ovulation',
      image: Images.HOMESCREEN_NOTATION_OVULATION,
      style: {
        width: 28,
        height: 28,
      },
      tooltipstyle: { backgroundColor: COLORS.skyblue },
    },
  ];

  //bottom drawer -> add sexual activity
  const handlePressActivity = () => {
    setDrawerContent(
      <ActivityDrawerContent
        isChecked={isChecked}
        onCheckToggle={setIsChecked}
      />,
    );
    setisDrawerOpen(true);
  };

  const ActivityDrawerContent: React.FC<ActivityDrawerContentProps> = ({
    isChecked,
    onCheckToggle,
  }) => {
    return (
      <View style={{ minHeight: 500 }}>
        <View style={styles.drawercontainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'stretch',
              maxHeight: 40,
            }}>
            <Pressable onPress={closeDrawer}>
              <AppText type={TWELVE} weight={SEMI_BOLD} color={PRIMARY}>
                Cancel
              </AppText>
            </Pressable>
            <AppText type={FOURTEEN} weight={SEMI_BOLD}>
              Sexual Activity
            </AppText>
            <Pressable>
              <AppText type={TWELVE} weight={SEMI_BOLD} color={PRIMARY}>
                Add
              </AppText>
            </Pressable>
          </View>
          <View style={styles.middlecontainer}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppText type={SIXTEEN} weight={SEMI_BOLD}>
                Today, {formattedDate}
              </AppText>
            </View>
            <View style={styles.radiobtncontainer}>
              <TouchableOpacity
                onPress={() => {
                  onCheckToggle(!isChecked);
                }}
                style={styles.renderSinglefirst}>
                <AppText type={TWELVE} weight={NORMAL}>
                  Had Intercourse
                </AppText>
                <RadioButton.Android
                  value="HadIntercourse"
                  status={isChecked ? 'checked' : 'unchecked'}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={closeDrawer} style={styles.Nextbtn}>
            <AppText type={SIXTEEN} color={WHITE} style={{ textAlign: 'center' }}>
              Done
            </AppText>
          </TouchableOpacity>
        </View>
        <BottomDrawer isVisible={isDrawerOpen} onClose={closeDrawer}>
          {drawerContent}
        </BottomDrawer>
      </View>
    );
  };

  //bottom drawer-> add periods
  const handlePressPeriods = () => {
    setDrawerContent(
      <View style={{ minHeight: 700 }}>
        <View style={styles.drawercontainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'stretch',
            }}>
            <Pressable onPress={closeDrawer}>
              <AppText type={TWELVE} weight={MEDIUM} color={PRIMARY}>
                Cancel
              </AppText>
            </Pressable>
            <AppText type={FOURTEEN} weight={SEMI_BOLD}>
              Select Period Days
            </AppText>
            <Pressable>
              <AppText type={TWELVE} weight={MEDIUM} color={PRIMARY}>
                Add
              </AppText>
            </Pressable>
          </View>
          <View style={styles.middlecontainercalendar}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                maxHeight: 550,
              }}>
              <CalendarList
                horizontal={false}
                pagingEnabled={false}
                pastScrollRange={12}
                futureScrollRange={12}
                // Highlight today's date
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: COLORS.white,
                  },
                }}
                onDayPress={(day: DayObject) => {
                  setSelectedDate(day.dateString);
                }}
                // Initial date
                current={new Date().toISOString().split('T')[0]}
                // Style adjustments
                theme={{
                  selectedDayBackgroundColor: COLORS.red,
                  todayTextColor: COLORS.primary,
                }}
              />
            </View>
          </View>
        </View>
      </View>,
    );
    setisDrawerOpen(true);
  };

  useEffect(() => {
    const onBackPress = () => {
      NavigationService.navigate('SplashScreen');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, []);
  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  return (
    <AppSafeAreaView>
      <View style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
        <Header
          onBackPress={() => NavigationService.navigate('SplashScreen')}
          title="Period Tracking"
        />
        <View style={styles.container}>
          <View style={{ marginBottom: 5 }}>
            <Tracker />
          </View>
          {/* notations */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 50,
              alignContent: 'center',
              alignSelf: 'stretch',
              maxHeight: 30,
            }}>
            {/* popover notations */}
            {popovers.map(popover => (
              <View key={popover.id}>
                <FastImage
                  source={popover.image}
                  resizeMode="contain"
                  style={popover.style}>


                  <Tooltip
                    isVisible={visiblePopover === popover.id}
                    content={
                      <View>
                        <AppText weight="SEMI_BOLD" type="TEN" color={WHITE}>
                          {popover.title}
                        </AppText>
                      </View>
                    }
                    placement="bottom"
                    onClose={() => {
                      setVisiblePopover(null);
                    }}
                    backgroundColor={COLORS.transparent}
                    contentStyle={{
                      ...popover.tooltipstyle,
                      elevation: 2,
                      shadowOpacity: 0.1,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setVisiblePopover(prev =>
                          prev === popover.id ? null : popover.id,
                        );
                      }}
                      style={styles.infoIconContainer}></TouchableOpacity>
                  </Tooltip>
                </FastImage>

              </View>
            ))}
          </View>

          {/* cycle log */}
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: 10,
              maxHeight: 60,
            }}>
            <AppText type={EIGHTEEN} weight={SEMI_BOLD}>
              Cycle Log
            </AppText>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Pressable>
                <AppText>Add symptoms</AppText>
              </Pressable>
              <Pressable>
                <AppText onPress={handlePressPeriods}>Add Periods</AppText>
              </Pressable>
              <Pressable onPress={handlePressActivity}>
                <AppText>Add sexual activity</AppText>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              // justifyContent: 'flex-start',
              // alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: COLORS.alabaster,
              paddingVertical: 10,
              paddingHorizontal: 20,
              maxHeight: 230,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignSelf: 'stretch',
                gap: 5,
                maxHeight: 50,

              }}>
              <AppText type={SIXTEEN} weight={SEMI_BOLD} color={PRIMARY}>
                Summary
              </AppText>
              <AppText type={FOURTEEN} weight={SEMI_BOLD}>
                Last Menstrual Period
              </AppText>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'flex-start',
                alignSelf: 'stretch',
                maxHeight: 150,
                marginTop: 3,

              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  gap: 4,
                  paddingVertical: 4,
                }}>
                <AppText type={FOURTEEN} weight={MEDIUM}>
                  Started 20 October
                </AppText>
                <AppText type={THIRTEEN} weight={SEMI_BOLD}>
                  26 Days
                </AppText>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  gap: 4,
                  paddingVertical: 4,
                  borderTopWidth: 0.5,
                  borderTopColor: COLORS.black,
                }}>
                <AppText type={FOURTEEN} weight={MEDIUM}>
                  Typical Period Length
                </AppText>
                <AppText type={THIRTEEN} weight={SEMI_BOLD}>
                  5 Days
                </AppText>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  gap: 4,
                  paddingVertical: 4,
                  borderTopWidth: 0.5,
                  borderTopColor: COLORS.black,
                }}>
                <AppText type={FOURTEEN} weight={MEDIUM}>
                  Typical Cycle Length
                </AppText>
                <AppText type={THIRTEEN} weight={SEMI_BOLD}>
                  28 Days
                </AppText>
              </View>
            </View>
          </View>
          <BottomDrawer isVisible={isDrawerOpen} onClose={closeDrawer}>
            {drawerContent}
          </BottomDrawer>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default PeriodTrackingHome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    // backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingBottom: 30,
  },
  //bottom drawer styles
  drawercontainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlecontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    marginBottom: 400,
  },
  middlecontainercalendar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    // marginBottom: 280,
  },
  radiobtncontainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
  renderSinglefirst: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 6,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#ECEBEB',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  renderSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 4,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#ECEBEB',
    justifyContent: 'space-between',
  },
  Nextbtn: {
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  infoIconContainer: {
    // backgroundColor: "red",
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
});
