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
import Calendar from '../../common/Calendar';

const PeriodTrackingHome = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateSelect = (date: string | string[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };
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

  //bottom drawer -> add symptoms
  const handlePressSymptoms = () => {
    setDrawerContent(
      <View style={{minHeight: 600}}>
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
                onPress={() => handleRadioPress}
                style={styles.renderSinglefirst}>
                <AppText type={TWELVE} weight={NORMAL}>
                  Had Intercourse
                </AppText>
                <RadioButton
                  value=""
                  status={isChecked === true ? 'checked' : 'unchecked'}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              {/* test button */}
              <View>
                <RadioButton
                  value=""
                  status={isChecked ? 'checked' : 'unchecked'}
                />
              </View>
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
          <TouchableOpacity style={styles.Nextbtn}>
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
      <View style={{minHeight: 600}}>
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
          <View style={styles.middlecontainer}>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              selectedDateColor="#FF6161"
              selectedDateTextColor="#FFFFFF"
              todayTextColor="#E392A1"
              numOfRows={5}
            />
          </View>
          <TouchableOpacity style={styles.Nextbtn}>
            <AppText type={SIXTEEN} color={WHITE} style={{textAlign: 'center'}}>
              Done
            </AppText>
          </TouchableOpacity>
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
            gap: 10,
          }}>
          <AppText type={EIGHTEEN} weight={SEMI_BOLD}>
            Cycle Log
          </AppText>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* cycle log */}
            <Pressable onPress={handlePressSymptoms}>
              <AppText>Add symptoms</AppText>
            </Pressable>
            <Pressable>
              <AppText onPress={handlePressPeriods}>Add Periods</AppText>
            </Pressable>
            <Pressable>
              <AppText>Add symptoms</AppText>
            </Pressable>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    marginBottom: 280,
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
