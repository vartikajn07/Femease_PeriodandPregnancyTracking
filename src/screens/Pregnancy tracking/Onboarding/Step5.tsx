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
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/RootNavigator';

const Step5 = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNext = () => {
    navigation.navigate('PregnancyHome');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/pregnancyonboarding3.gif')}
            resizeMode="contain"
          />
          <AppText style={styles.headingText}>
            Congratulations on this incredible journey towards motherhood! 🌟{' '}
          </AppText>
        </View>
        <TouchableOpacity onPress={handleNext} style={styles.Nextbtn}>
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
      ,
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
    gap: 5,
    width: 300,
  },
  image: {
    width: 300,
    height: 400,
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

export default Step5;
