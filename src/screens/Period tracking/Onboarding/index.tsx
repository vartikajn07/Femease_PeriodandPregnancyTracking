import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../../constants/themes';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import FastImage from 'react-native-fast-image';
import Images from '../../../assets';

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
          <Text style={styles.headingText}>Welcome to period tracking</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING1}
            />
            <Text style={styles.contenttext}>
              Period and Fertility Predictions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING2}
            />
            <Text style={styles.contenttext}>Cycle Timeline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <FastImage
              style={styles.image}
              source={Images.PERIOD_ONBOARDING3}
            />
            <Text style={styles.contenttext}>Cycle Log</Text>
          </TouchableOpacity>
        </View>
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
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
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
  contenttext: {
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
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

export default Onboarding;
