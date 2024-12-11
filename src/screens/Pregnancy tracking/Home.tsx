import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import {Periodtracker} from '../../components/Period tracker widget';
import {Header} from '../../components/Header';

const PregnancyHome = () => {
  return (
    <>
      <AppSafeAreaView>
        <Header title="Pregnancy Tracking" />
        <>
          <Periodtracker />
        </>
      </AppSafeAreaView>
    </>
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
    paddingHorizontal: 20,
  },
});

export default PregnancyHome;

{
  /* <AppSafeAreaView>
<Header title="Pregnancy Tracking" />
<View style={styles.container}>
  <AppText>Pregnancy Tracking Home</AppText>
  <View>
   
  </View>
</View>
</AppSafeAreaView> */
}
