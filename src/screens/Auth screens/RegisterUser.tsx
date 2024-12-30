import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {AppText, MEDIUM, SIXTEEN, WHITE} from '../../common/AppText';
import {AppSafeAreaView} from '../../common/AppSafeAreaView';
import { COLORS, FONTS } from '../../constants/themes';

function RegisterUser(): React.JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDisabled, setisDisabled] = useState(false)
  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => {
    setPhoneNumber(text);
  };
  return (
    <AppSafeAreaView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
           height: '100%',
          paddingVertical: 20,
        }}>
        <AppText>Auth screen - Register user</AppText>
          <View style={styles.innercontainer}>
            {/* email */}
            <TextInput
            placeholder="Enter your email address"
            keyboardType='default'
            // value={phoneNumber}
            style={styles.txtInput}
            // onChangeText={handlePhoneNumberChange}
          />
          {/* password */}
               <TextInput
            placeholder="Enter your password"
            keyboardType='default'
            // value={phoneNumber}
            style={styles.txtInput}
            // onChangeText={handlePhoneNumberChange}
          />
          {/* name */}
          <TextInput placeholder='What do we call you?'
          keyboardType='default' 
          style={styles.txtInput}
          />
          {/* age */}
          <TextInput placeholder='Age?'  keyboardType= 'numeric' 
          style={styles.txtInput} />
          {/* bmi */}
          <TextInput  placeholder='Bmi?' keyboardType= 'numeric' 
          style={styles.txtInput}/>
          {/* <GlobalButton
          isDisabled={phoneNumber.length !== 10}
          isLoading={isLoading}
          onPress={handleGetOTP}
        /> */}
          </View>
          <TouchableOpacity  style={styles.Nextbtn}>
            <AppText 
              weight={MEDIUM}
              type={SIXTEEN}
              color={WHITE}
              style={{textAlign: 'center'}}>
              Next
            </AppText>
            </TouchableOpacity>
      </View>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
  flex: 1,
  gap: 20,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'flex-start',
   },
    txtInput: {
    fontFamily: FONTS.SemiBold,
    backgroundColor:COLORS.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: COLORS.primary,
    borderRadius: 8,
    color: COLORS.black,
    fontSize: 18,
    letterSpacing: 1,
    height: 45,
    width: 300
  },
   Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: 300,
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
})

export default RegisterUser;
