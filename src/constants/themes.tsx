import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#E392A1',
  black: '#3A3A3A',
  gray: '#CECECE',
  gray_bg: '#EEEEEE',
  dark_gray: '#8D8D8D',
  lightest_gray: '#F3F3F3',
  light_gray: '#F1F1F1',
  white: '#ffffff',
  orange: '#FF6161',
  lightPink_active: '#F1CED5',
  lightPink_second: '#F9E9EC',
  lightPink_third: '#FF94AB',
  lightPink_fourth: '#EAB5BF',
  light_brown: '#F5EBE0',
  success: '#489659',
  red: '#F73C3C',
  input_bg: '#D9D9D9',
  border: '#C6C6C6',
  transparent: 'transparent',
  orange_second: '#FFC732',
  orange_third: '#FF9500',
  blue: '#147FF3',
  second_text: '#767676',
  darkWhite: '#F8F8F8',
  lightPink_fifth: '#FAF5F1',
  border_second: '#efefef',
  splash: '#FC4C62',
  doctor_bg: '#E6C0BB',
  black_fifty: '#3A3A3A50',
  border_payment: '#E6E6E6',
  light_gray_ECEBEB: '#ECEBEB',
};

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

const appTheme = {FONTS, COLORS};

export default appTheme;
