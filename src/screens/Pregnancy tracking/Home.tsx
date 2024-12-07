import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../common/AppText';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {Periodtracker} from '../../components/Period tracker widget';

const PregnancyHome = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <AppText>Pregnancy Tracking Home</AppText>
        <View>
          <Periodtracker />
        </View>
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
    gap: 50,
    paddingHorizontal: 10,
    paddingTop: 60,
  },
});

export default PregnancyHome;
