import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../common/AppText';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';

const PregnancyHome = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <AppText>Pregnancy Tracking Home</AppText>
      </View>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
});

export default PregnancyHome;
