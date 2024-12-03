import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../common/AppText';
import {BottomDrawer} from '../../components/Drawer';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';

const PeriodTrackingHome = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null,
  );

  const handlePress = () => {
    setDrawerContent(<AppText>This is drawer content</AppText>);
    setisDrawerOpen(true);
  };
  const closeDrawer = () => {
    setisDrawerOpen(false);
  };

  return (
    <AppSafeAreaView>
      <View>
        <AppText>Period Tracking Home</AppText>
        <TouchableOpacity onPress={handlePress}>
          <AppText>Add symptoms</AppText>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
