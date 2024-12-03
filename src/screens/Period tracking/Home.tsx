import React, {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  AppText,
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

const PeriodTrackingHome = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioPress = () => {
    setIsChecked(!isChecked);
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  //bottom drawer-> add symptoms
  const handlePress = () => {
    setDrawerContent(
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
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignSelf: 'stretch',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <AppText type={SIXTEEN} weight={SEMI_BOLD}>
              Today, {formattedDate}
            </AppText>
          </View>
          <View style={styles.radiobtncontainer}>
            <TouchableOpacity
              onPress={handleRadioPress}
              style={styles.renderSingle}>
              <AppText type={TWELVE} weight={NORMAL}>
                Had Intercourse
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
      </View>,
    );
    setisDrawerOpen(true);
  };
  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <AppText>Period Tracking Home</AppText>
        <Pressable onPress={handlePress}>
          <AppText>Add symptoms</AppText>
        </Pressable>
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
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawercontainer: {
    minHeight: 600,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  radiobtncontainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
  renderSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 6,
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
    marginBottom: 10,
    borderRadius: 8,
  },
});
