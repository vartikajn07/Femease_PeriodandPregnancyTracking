import React, {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  AppText,
  FOURTEEN,
  MEDIUM,
  PRIMARY,
  SEMI_BOLD,
  SIXTEEN,
  TWELVE,
  WHITE,
} from '../../common/AppText';
import {BottomDrawer} from '../../components/Drawer';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {COLORS} from '../../constants/themes';

const PeriodTrackingHome = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
  });

  //bottom drawer
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <AppText type={SIXTEEN} weight={SEMI_BOLD}>
            Today, {formattedDate}
          </AppText>
        </View>
        <AppText type={TWELVE}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, earum
          optio. Odit iusto tempora velit eum est voluptatibus, minus magnam
          quos tempore architecto repellendus sed quas consectetur rem placeat a
          temporibus culpa repudiandae. Nisi odio quisquam, sit provident illo
          at ea magnam voluptates tenetur delectus expedita, cupiditate illum,
          nemo quae?
        </AppText>
        <TouchableOpacity style={styles.Nextbtn}>
          <AppText type={SIXTEEN} color={WHITE} style={{textAlign: 'center'}}>
            Got it
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
    flex: 1,
    alignItems: 'center',
    gap: 20,
  },
  Nextbtn: {
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
});
