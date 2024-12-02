import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {
  AppText,
  MEDIUM,
  PRIMARY,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import FastImage from 'react-native-fast-image';
import Images from '../../../assets';

interface StepProps {
  onNext: () => void;
  skipToStep4: () => void;
}

const Step2: React.FC<StepProps> = ({onNext, skipToStep4}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentcontainer}>
          <View style={styles.containerheading}>
            <AppText type={TWENTY} weight={SEMI_BOLD}>
              Your little one is expected to arrive on June 03, 2025
            </AppText>
          </View>
          <View>
            <FastImage
              style={styles.image}
              source={Images.PREGNANCY_ONBOARDING1}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onNext} style={styles.duedatebtn}>
            <AppText
              weight={MEDIUM}
              type={SIXTEEN}
              color={PRIMARY}
              style={{textAlign: 'center'}}>
              Change Due Date
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToStep4} style={styles.Nextbtn}>
            <AppText
              weight={MEDIUM}
              type={SIXTEEN}
              color={WHITE}
              style={{textAlign: 'center'}}>
              Next
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 5,
    paddingTop: 60,
  },
  contentcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  containerheading: {
    marginHorizontal: 'auto',
    paddingHorizontal: 8,
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'left',
  },
  image: {
    width: 350,
    height: 350,
  },
  buttons: {
    position: 'absolute',
    bottom: 70,
    gap: 20,
  },
  duedatebtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: '#ffff',
    width: '95%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
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

export default Step2;
