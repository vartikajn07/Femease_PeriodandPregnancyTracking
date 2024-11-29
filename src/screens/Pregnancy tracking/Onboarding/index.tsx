import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';

import {useNavigation} from '@react-navigation/native';
import {AppText} from '../../../common/AppText';
import Step1 from '../../Pregnancy tracking/Onboarding/Step1';
import Step2 from '../../Pregnancy tracking/Onboarding/Step2';
import Step3 from './Step3';

const PregnancyOnboarding = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/pregnancyonboarding1.png')}
          resizeMode="contain"
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
    <Step2 onNext={goToNextStep} />,
    <Step3 />,
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
    marginLeft: 90,
    width: 250,
    height: 370,
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
