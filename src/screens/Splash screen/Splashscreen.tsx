import React, { useEffect } from 'react';

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';
import Images from '../../assets';
import { AppSafeAreaView } from '../../common/AppSafeAreaView';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onboardUser } from '../../redux/slices/OnboardingSlice';
import { useTranslation } from 'react-i18next';


type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

function SplashScreen(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  const { userId, loading, error, success } = useAppSelector(state => state.onboardingtoPeriod);

  const handleOnboarding = async () => {
    try {
      const resultAction = await dispatch(onboardUser());
      if (onboardUser.fulfilled.match(resultAction)) {
        console.log('Onboarding Successful! User ID:', resultAction.payload);
      } else if (onboardUser.rejected.match(resultAction)) {
        console.error('Onboarding Failed:', resultAction.error);
      }
    } catch (error) {
      console.error('Onboarding Failed:', error);
    }
  };

  useEffect(() => {
    if (success) {
      navigation.navigate('PeriodTrackingOnboarding');
    }
  }, [success, navigation]);


  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerheading}>
          <Text style={styles.headingText}>{t("What do you want to track?")}</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={async () => {
              await handleOnboarding();
            }}
            style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.SPLASH_SCREEN_PERIOD}
            />
            <Text style={styles.contenttext}>{t("Period Tracking")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PregnancyOnboarding')}
            style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.SPLASH_SCREEN_PREGNANCY}
              resizeMode="contain"
            />
            <Text style={styles.contenttext}>{t("Pregnancy Tracking")}</Text>
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
