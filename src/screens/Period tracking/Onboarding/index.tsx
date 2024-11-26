import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';
import Step1 from './Step1';
import Step2 from './Step2';

import {useNavigation} from '@react-navigation/native';
import Step3 from './Step3';

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Array of steps
  const steps = [
    <View style={styles.container}>
      <View style={styles.containerheading}>
        <Text style={styles.headingText}>Welcome to period tracking</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentbtn}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/periodonboarding1.png')}
          />
          <Text style={styles.contenttext}>
            Period and Fertility Predictions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentbtn}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/periodonboarding2.png')}
          />
          <Text style={styles.contenttext}>Cycle Timeline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentbtn}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/periodonboarding3.png')}
          />
          <Text style={styles.contenttext}>Cycle Log</Text>
        </TouchableOpacity>
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
    <Step3 onNext={goToNextStep} />,
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
  },
  containerheading: {
    marginHorizontal: 'auto',
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
  },
  content: {
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  contentbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'contain',
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

export default Onboarding;
