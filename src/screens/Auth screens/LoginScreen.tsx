import React, { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AppText, MEDIUM, SIXTEEN, WHITE } from '../../common/AppText';
import { AppSafeAreaView } from '../../common/AppSafeAreaView';
import { COLORS, FONTS } from '../../constants/themes';
import { RootStackParamList } from '../../routes/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginUser } from '../../redux/slices/LoginSlice';


type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

function LoginScreen(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setisDisabled] = useState(false);

  const { loading, error, user } = useAppSelector(state => state.auth);

  //login function
  const handleLogin = async () => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      console.log('Login successful');
      navigation.navigate('SplashScreen');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  useEffect(() => {
    if (email && password) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [email, password]);

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
        <AppText>Auth screen - Login screen</AppText>
        <View style={styles.innercontainer}>
          {/* email */}
          <TextInput
            placeholder="Enter your email address"
            keyboardType="email-address"
            value={email}
            style={styles.txtInput}
            onChangeText={setEmail}
          />
          {/* password */}
          <TextInput
            placeholder="Enter your password"
            keyboardType="default"
            value={password}
            style={styles.txtInput}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          disabled={isDisabled || loading}
          style={[
            styles.Nextbtn,
            isDisabled || loading ? { backgroundColor: '#ccc' } : {},
          ]}>
          <AppText
            weight={MEDIUM}
            type={SIXTEEN}
            color={WHITE}
            style={{ textAlign: 'center' }}>
            {loading ? 'Loading...' : 'Next'}
          </AppText>
        </TouchableOpacity>
        {/* Error  */}
        {error && <AppText style={{ color: 'red' }}>{error}</AppText>}
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
    backgroundColor: COLORS.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: COLORS.primary,
    borderRadius: 8,
    color: COLORS.black,
    fontSize: 18,
    letterSpacing: 1,
    height: 45,
    width: 300,
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
});

export default LoginScreen;
