import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../../constants/themes';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

function SplashScreen(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerheading}>
          <Text style={styles.headingText}>What do you want to track?</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PeriodTrackingOnboarding')}
            style={styles.contentbtn}>
            <Image
              style={styles.image}
              source={require('../../../src/assets/images/homeimg1.png')} // Local image
            />
            <Text style={styles.contenttext}>Period Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <Image
              style={styles.image}
              source={require('../../../src/assets/images/homeimg2.png')} // Local image
            />
            <Text style={styles.contenttext}>Pregnancy Tracking</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Nextbtn}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
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
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  contentbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
  },
  image: {
    width: 120,
    height: 120,
    objectFit: 'contain',
  },
  contenttext: {
    fontSize: 16,
    fontFamily: FONTS.SemiBold,
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

export default SplashScreen;
