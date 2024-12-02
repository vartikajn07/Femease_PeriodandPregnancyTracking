import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../../../constants/themes';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import FastImage from 'react-native-fast-image';
import Images from '../../../assets';
import {
  AppText,
  MEDIUM,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Array of steps
  const steps = [
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
        <View style={styles.containerheading}>
          <AppText type={TWENTY} weight={SEMI_BOLD}>
            Welcome to period tracking
          </AppText>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING1}
            />
            <AppText type={SIXTEEN} weight={SEMI_BOLD}>
              Period and Fertility Predictions
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING2}
            />
            <AppText type={SIXTEEN} weight={SEMI_BOLD}>
              Cycle Timeline
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING3}
            />
            <AppText type={SIXTEEN} weight={SEMI_BOLD}>
              Cycle Log
            </AppText>
          </TouchableOpacity>
        </View>
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
    </View>,
    //next screens within one section
    <Step1 onNext={goToNextStep} />,
    <Step2 onNext={goToNextStep} />,
    <Step3 />,
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
  contentcontainer: {
    display: 'flex',
    gap: 110,
  },
  containerheading: {
    marginHorizontal: 'auto',
  },
  content: {
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
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
  Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '95%',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Onboarding;
