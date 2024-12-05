import React, {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {BottomDrawer} from '../../components/Drawer';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {COLORS} from '../../constants/themes';
import {RadioButton} from 'react-native-paper';
import {CalendarList} from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';

type DayObject = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

const PeriodTrackingHome = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const handleRadioPress = () => {
    setIsChecked(!isChecked);
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  //bottom drawer -> add sexual activity
  const handlePressActivity = () => {
    setDrawerContent(
      <View style={{minHeight: 700}}>
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
              Sexual Activity
            </AppText>
            <Pressable>
              <AppText type={TWELVE} weight={MEDIUM} color={PRIMARY}>
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
                onPress={handleRadioPress}
                style={styles.renderSinglefirst}>
                <AppText type={TWELVE} weight={NORMAL}>
                  Had Intercourse
                </AppText>
                <RadioButton
                  value=""
                  status={isChecked ? 'checked' : 'unchecked'}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              {/* test button */}
              {/* <View>
                <RadioButton
                  value=""
                  status={isChecked ? 'checked' : 'unchecked'}
                />
              </View> */}
              <TouchableOpacity
                onPress={handleRadioPress}
                style={styles.renderSingle}>
                <AppText type={TWELVE} weight={NORMAL}>
                  Protection Used
                </AppText>
                <RadioButton.Android
                  value=""
                  status={isChecked ? 'checked' : 'unchecked'}
                  color={COLORS.primary}
                  onPress={handleRadioPress}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleRadioPress}
                style={styles.renderSingle}>
                <AppText type={TWELVE} weight={NORMAL}>
                  Protection Not Used
                </AppText>
                <RadioButton.Android
                  value=""
                  status={isChecked ? 'checked' : 'unchecked'}
                  color={COLORS.primary}
                  onPress={handleRadioPress}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={closeDrawer} style={styles.Nextbtn}>
            <AppText type={SIXTEEN} color={WHITE} style={{textAlign: 'center'}}>
              Done
            </AppText>
          </TouchableOpacity>
        </View>
      </View>,
    );
    setisDrawerOpen(true);
  };

  //bottom drawer-> add periods
  const handlePressPeriods = () => {
    setDrawerContent(
      <View style={{minHeight: 700}}>
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

  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <AppText type={SIXTEEN} weight={SEMI_BOLD}>
            Period Tracking Home
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: 20,
            maxHeight: 100,
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
            {/* cycle log */}
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
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: COLORS.alabaster,
            paddingVertical: 10,
            paddingHorizontal: 20,
            maxHeight: 240,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignSelf: 'stretch',
              gap: 10,
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
              marginTop: 10,
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
    </AppSafeAreaView>
  );
};

export default PeriodTrackingHome;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#ffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 30,
    alignItems: 'center',
    alignSelf: 'stretch',
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
    marginBottom: 360,
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
    marginBottom: 12,
    borderRadius: 8,
  },
});
