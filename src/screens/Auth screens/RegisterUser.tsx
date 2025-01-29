import React, { useEffect, useState } from 'react';
import { Keyboard, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AppText, MEDIUM, SIXTEEN, WHITE } from '../../common/AppText';
import { AppSafeAreaView } from '../../common/AppSafeAreaView';
import { COLORS, FONTS } from '../../constants/themes';
import { RootStackParamList } from '../../routes/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { registerUser } from '../../redux/slices/authSlice';
import { useTranslation } from 'react-i18next';

type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

function RegisterUser(): React.JSX.Element {
  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [isDisabled, setisDisabled] = useState(false);

  const { loading, error, user } = useAppSelector(state => state.auth);

  const handleRegister = async () => {
    Keyboard.dismiss()
    try {
      await dispatch(
        registerUser({
          email,
          password,
          name,
          Age: Number(Age),
          bmi: Number(bmi),
        }),
      ).unwrap();
      navigation.navigate('LoginScreen');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  useEffect(() => {
    if (email && password && name && Age && bmi) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [email, password, name, Age, bmi]);

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
        <AppText>{t("auth-screen")}</AppText>
        <View style={styles.innercontainer}>
          {/* email */}
          <TextInput
            placeholder={t("email address")}
            keyboardType="email-address"
            value={email}
            style={styles.txtInput}
            onChangeText={setEmail}
          />
          {/* password */}
          <TextInput
            placeholder={t('password')}
            keyboardType="default"
            value={password}
            style={styles.txtInput}
            onChangeText={setPassword}
            secureTextEntry
          />
          {/* name */}
          <TextInput
            placeholder={t('Name')}
            keyboardType="default"
            style={styles.txtInput}
            value={name}
            onChangeText={setName}
          />
          {/* age */}
          <TextInput
            placeholder={t('Age')}
            keyboardType="numeric"
            style={styles.txtInput}
            value={Age}
            onChangeText={setAge}
          />
          {/* bmi */}
          <TextInput
            placeholder={t('Bmi')}
            keyboardType="numeric"
            style={styles.txtInput}
            value={bmi}
            onChangeText={setBmi}
          />
        </View>
        <TouchableOpacity
          onPress={handleRegister}
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
            {loading ? t("Loading") : t("Next")}
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

export default RegisterUser;
