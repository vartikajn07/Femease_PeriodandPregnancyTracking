/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {FONTS} from './src/constants/themes';

function App(): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerheading}>
          <Text style={styles.headingText}>What do you want to track?</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.contentbtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/images/homeimg1.png')} // Local image
            />
            <Text style={styles.contenttext}>Period Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentbtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/images/homeimg2.png')} // Local image
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
    width: '80%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default App;
