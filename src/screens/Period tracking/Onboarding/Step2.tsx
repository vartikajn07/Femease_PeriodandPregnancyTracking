import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS} from '../../../constants/themes';
import {Picker} from '@react-native-picker/picker';

const Step2 = () => {
  return (
    <View>
      <View style={styles.containerheading}>
        <Text style={styles.headingText}>
          How long does your period usually last?
        </Text>
      </View>
      {/* Add your date picker or input here */}
      <View style={styles.content}>
        <Picker style={styles.picker}>
          <Picker.Item label="Between 1 to 5 days " value="1" />
          <Picker.Item label="Between 5 to 10 days" value="2" />
          <Picker.Item label="Between 10 to 15 days" value="3" />
          <Picker.Item label="Between 15 to 20 days" value="3" />
        </Picker>
        <Text style={styles.pickercaption}>
          Period length is measured from the first day to the last day of
          bleeding
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerheading: {
    marginHorizontal: 'auto',
    width: '60%',
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    gap: 20,
    display: 'flex',
    paddingHorizontal: 30,
  },
  picker: {
    borderColor: '#E392A1',
    borderWidth: 2,
    borderRadius: 5,
    maxHeight: 50,
  },
  pickercaption: {
    fontFamily: FONTS.Light,
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
