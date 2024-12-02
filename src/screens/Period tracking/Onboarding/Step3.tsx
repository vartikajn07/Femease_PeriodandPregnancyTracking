import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {Dropdown} from '../../../common/Dropdown';
import FastImage from 'react-native-fast-image';
import {dropdownIcon} from '../../../utils/ImageAssets';
import {
  AppText,
  TWELVE,
  LIGHT,
  TWENTY,
  SEMI_BOLD,
  MEDIUM,
  SIXTEEN,
  WHITE,
} from '../../../common/AppText';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/RootNavigator';
import Images from '../../../assets';

const Step3 = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [value, setValue] = useState('');

  const data = [
    {label: '> 20 days', value: '1'},
    {label: '> 30 days', value: '2'},
    {label: '> 40 days', value: '3'},
    {label: '> 50 days', value: '4'},
    {label: '> 60 days', value: '5'},
    {label: '> 70 days', value: '6'},
    {label: '> 80 days', value: '7'},
    {label: '> 90 days', value: '8'},
  ];
  const handleNext = () => {
    navigation.navigate('PeriodTrackingHome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <AppText
            type={TWENTY}
            weight={SEMI_BOLD}
            style={{textAlign: 'center'}}>
            How long is your typical cycle?
          </AppText>
        </View>
        <View style={styles.dropdowncontainer}>
          <Dropdown
            title=""
            data={data}
            value={value}
            onChange={item => setValue(item.value)}
            placeholder=""
            container={styles.dropcontainer}
            dropdown={styles.dropdown}
            labelField="label"
            valueField="value"
            renderRightIcon={() => (
              <FastImage
                source={Images.DROPDOWN_ICON}
                resizeMode="contain"
                style={{height: 15, width: 15}}
              />
            )}
          />
          <AppText type={TWELVE} weight={LIGHT} style={{paddingHorizontal: 5}}>
            Your cycle starts on the first day of your period and ends the day
            before your next period. Estimating your cycle length helps enable
            period predictions.
          </AppText>
        </View>
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.Nextbtn}>
        <AppText
          weight={MEDIUM}
          type={SIXTEEN}
          color={WHITE}
          style={{textAlign: 'center'}}>
          Next
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffff',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 60,
  },
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    gap: 70,
    display: 'flex',
    paddingHorizontal: 30,
  },
  //dropdown
  dropdowncontainer: {
    display: 'flex',
    gap: 5,
    paddingHorizontal: 6,
  },
  dropdown: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.primary,
    height: 45,
    backgroundColor: COLORS.white,
    width: '100%',
    paddingHorizontal: 10,
  },
  dropcontainer: {
    marginTop: 20,
  },
  Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '90%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Step3;
