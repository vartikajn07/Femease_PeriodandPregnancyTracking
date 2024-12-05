import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  AppText,
  MEDIUM,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import Step1 from '../../Pregnancy tracking/Onboarding/Step1';
import Step2 from '../../Pregnancy tracking/Onboarding/Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import FastImage from 'react-native-fast-image';
import Images from '../../../assets';
import {AppSafeAreaView} from '../../../common/AppSafeAreaView';

const PregnancyOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const skipToStep4 = () => {
    // Directly skip to Step 4
    setCurrentStep(4);
  };

  const steps = [
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.content}>
          <FastImage
            style={styles.image}
            resizeMode="contain"
            source={Images.PREGNANCY_ONBOARDING2}
          />
          <AppText
            type={TWENTY}
            weight={SEMI_BOLD}
            style={{textAlign: 'center'}}>
            Congratulations on this incredible journey towards motherhood! 🌟{' '}
          </AppText>
        </View>
        <TouchableOpacity onPress={goToNextStep} style={styles.Nextbtn}>
          <AppText
            weight={MEDIUM}
            type={SIXTEEN}
            color={WHITE}
            style={{textAlign: 'center'}}>
            Next
          </AppText>
        </TouchableOpacity>
      </View>
    </AppSafeAreaView>,
    <Step1 onNext={goToNextStep} />,
    <Step2 onNext={goToNextStep} skipToStep4={skipToStep4} />,
    <Step3 onNext={goToNextStep} />,
    <Step4 />,
  ];

  return <View style={styles.container}>{steps[currentStep]}</View>;
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
  containerheading: {
    marginHorizontal: 'auto',
    paddingHorizontal: 5,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    width: 300,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '95%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default PregnancyOnboarding;
