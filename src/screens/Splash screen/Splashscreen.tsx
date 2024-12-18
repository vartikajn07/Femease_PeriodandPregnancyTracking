import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../constants/themes';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';
import Images from '../../assets';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

function SplashScreen(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerheading}>
          <Text style={styles.headingText}>What do you want to track?</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeriodTrackingOnboarding')}
            style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.SPLASH_SCREEN_PERIOD}
            />
            <Text style={styles.contenttext}>Period Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PregnancyOnboarding')}
            style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.SPLASH_SCREEN_PREGNANCY}
              resizeMode="contain"
            />
            <Text style={styles.contenttext}>Pregnancy Tracking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 100,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 120,
  },
  containerheading: {
    marginHorizontal: 'auto',
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
  },
  content: {
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  contentbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
  },
  image: {
    width: 120,
    height: 120,
    objectFit: 'contain',
  },
  contenttext: {
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
  },
  Nextbtn: {
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '90%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default SplashScreen;
