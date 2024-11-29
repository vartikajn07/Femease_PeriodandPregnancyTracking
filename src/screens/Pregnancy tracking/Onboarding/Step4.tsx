import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {
  AppText,
  FIFTEEN,
  MEDIUM,
  SEMI_BOLD,
  TEN,
  TWENTY,
} from '../../../common/AppText';

interface StepProps {
  onNext: () => void;
}

const Step4: React.FC<StepProps> = ({onNext}) => {
  return (
    <>
      <AppText>your weight</AppText>
      <AppText>your height</AppText>
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}>
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
    </>
  );
};

const styles = StyleSheet.create({
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
export default Step4;
