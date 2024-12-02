import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {Dropdown} from '../../../common/Dropdown';
import FastImage from 'react-native-fast-image';
import {dropdownIcon} from '../../../utils/ImageAssets';
import {AppText, TWELVE, LIGHT} from '../../../common/AppText';
import Images from '../../../assets';

interface StepProps {
  onNext: () => void;
}

const Step2: React.FC<StepProps> = ({onNext}) => {
  const [value, setValue] = useState('');

  const data = [
    {label: '1 day', value: '1'},
    {label: '2 days', value: '2'},
    {label: '3 days', value: '3'},
    {label: '4 days', value: '4'},
    {label: '5 days', value: '5'},
    {label: '6 days', value: '6'},
    {label: '7 days', value: '7'},
    {label: '8 days', value: '8'},
    {label: '9 days', value: '9'},
    {label: '10 days', value: '10'},
    {label: '11 days', value: '11'},
    {label: '12 days', value: '12'},
    {label: '13 days', value: '13'},
    {label: '14 days', value: '14'},
    {label: '15 days', value: '15'},
    {label: '16 days', value: '16'},
    {label: '17 days', value: '17'},
    {label: '18 days', value: '18'},
    {label: '19 days', value: '19'},
    {label: '20 days', value: '20'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerheading}>
          <Text style={styles.headingText}>
            How long does your period usually last?
          </Text>
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
          <AppText style={styles.caption} type={TWELVE} weight={LIGHT}>
            Period length is measured from the first to the last day of
            bleeding.
          </AppText>
        </View>
      </View>
      {/* Next button */}
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}>
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
  containerheading: {},
  headingText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    gap: 70,
    display: 'flex',
    justifyContent: 'center',
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
  caption: {
    color: COLORS.dark_gray,
    paddingHorizontal: 5,
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
