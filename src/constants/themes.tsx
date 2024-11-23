import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const FONTS = {
  Regular: 'Montserrat-Regular',
  Black: 'Montserrat-Black',
  SemiBold: 'Montserrat-SemiBold',
  Bold: 'Montserrat-Bold',
  ExtraBold: 'Montserrat-ExtraBold',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Thin: 'Montserrat-Thin',
  ExtraLight: 'Montserrat-ExtraLight',
  Montaga: 'Montaga-Regular',
  Satisfy: 'Satisfy-Regular',
};

const appTheme = {FONTS};

export default appTheme;
