import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {Dropdown} from '../../../common/Dropdown';
import FastImage from 'react-native-fast-image';
import {
  AppText,
  LIGHT,
  MEDIUM,
  SEMI_BOLD,
  SIXTEEN,
  TWELVE,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import Images from '../../../assets';

interface StepProps {
  onNext: () => void;
}

const Step2: React.FC<StepProps> = ({onNext}) => {
  const [value, setValue] = useState('');

  const data = Array.from({length: 20}, (_, i) => ({
    label: `${i + 1} day${i + 1 > 1 ? 's' : ''}`,
    value: `${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <AppText
            type={TWENTY}
            weight={SEMI_BOLD}
            style={{textAlign: 'center'}}>
            How long does your period usually last?
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
            Period length is measured from the first to the last day of
            bleeding.
          </AppText>
        </View>
      </View>
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}>
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

export default Step2;
