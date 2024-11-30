import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';

import {useNavigation} from '@react-navigation/native';
import {AppText} from '../../../common/AppText';
import Step1 from '../../Pregnancy tracking/Onboarding/Step1';
import Step2 from '../../Pregnancy tracking/Onboarding/Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import FastImage from 'react-native-fast-image';

const PregnancyOnboarding = () => {
  const navigation = useNavigation();
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
    <View style={styles.container}>
      <View style={styles.content}>
        <FastImage
          style={styles.image}
          resizeMode="contain"
          source={require('../../../assets/images/pregnancyonboarding3.gif')}
        />

        <AppText style={styles.headingText}>
          Congratulations on this incredible journey towards motherhood! 🌟{' '}
        </AppText>
      </View>
      <TouchableOpacity onPress={goToNextStep} style={styles.Nextbtn}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffff',
            fontFamily: FONTS.Medium,
            fontSize: 16,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>,
    <Step1 onNext={goToNextStep} />,
    <Step2 onNext={goToNextStep} skipToStep4={skipToStep4} />,
    <Step3 onNext={goToNextStep} />,
    <Step4 />,
  ];

  return (
    <View style={styles.container}>
      {steps[currentStep]}

      {/* Next button
      <TouchableOpacity onPress={goToNextStep} style={styles.Nextbtn}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffff',
            fontFamily: FONTS.Medium,
            fontSize: 16,
          }}>
          Next
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  containerheading: {
    marginHorizontal: 'auto',
    paddingHorizontal: 5,
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: 300,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  contenttext: {
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
  },
  Nextbtn: {
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
