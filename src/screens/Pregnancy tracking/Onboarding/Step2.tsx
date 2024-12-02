import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {AppText} from '../../../common/AppText';
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
        <View style={styles.containerheading}>
          <AppText style={styles.headingText}>
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
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onNext} style={styles.duedatebtn}>
            <Text
              style={{
                textAlign: 'center',
                color: '#E392A1',
                fontFamily: FONTS.Medium,
                fontSize: 16,
              }}>
              Change due date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToStep4} style={styles.Nextbtn}>
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
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 60,
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
    gap: 20,
  },
  duedatebtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: '#ffff',
    width: '90%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
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

export default Step2;
