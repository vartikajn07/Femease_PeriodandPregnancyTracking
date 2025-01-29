import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FONTS, COLORS } from '../../../constants/themes';
import { Dropdown } from '../../../common/Dropdown';
import FastImage from 'react-native-fast-image';
import {
  AppText,
  GREY,
  LIGHT,
  MEDIUM,
  RED,
  SEMI_BOLD,
  SIXTEEN,
  TWELVE,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import Images from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../../redux/store';
import { updatePeriodLength } from '../../../redux/slices/PeriodLengthSlice';
import { useDispatch } from 'react-redux';


interface StepProps {
  onNext: () => void;
}

const Step2: React.FC<StepProps> = ({ onNext }) => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.periodLength);
  const [isDisabled, setisDisabled] = useState(false);

  const periodTrackerId = useAppSelector((state: RootState) => state.onboardingtoPeriod.periodtrackerId) as string;
  const data = Array.from({ length: 20 }, (_, i) => ({
    label: `${i + 1} day${i + 1 > 1 ? 's' : ''}`,
    value: `${i + 1}`,
  }));
  const periodlength = useAppSelector((state: RootState) => state.periodLength.lengthInDays);
  const token = useAppSelector((state: RootState) => state.login.token)
  console.log('Length in days from Redux store:', periodlength);
  console.log('periodtrackerid: ', periodTrackerId)
  console.log('token', token)

  const handleDropdownChange = (selectedValue: string) => {
    setValue(selectedValue)
    dispatch(updatePeriodLength({ periodTrackerId, lengthInDays: Number(selectedValue) }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <AppText
            type={TWENTY}
            weight={SEMI_BOLD}
            style={{ textAlign: 'center' }}>
            How long does your period usually last?
          </AppText>
        </View>
        <View style={styles.dropdowncontainer}>
          <Dropdown
            title=""
            data={data}
            value={value}
            onChange={(item) => handleDropdownChange(item.value)}
            placeholder=""
            container={styles.dropcontainer}
            dropdown={styles.dropdown}
            labelField="label"
            valueField="value"
            renderRightIcon={() => (
              <FastImage
                source={Images.DROPDOWN_ICON}
                resizeMode="contain"
                style={{ height: 15, width: 15 }}
              />
            )}
          />
          <AppText type={TWELVE} weight={LIGHT} style={{ paddingHorizontal: 5 }}>
            Period length is measured from the first to the last day of
            bleeding.
          </AppText>
        </View>
      </View>
      <TouchableOpacity onPress={onNext} style={styles.Nextbtn}
        disabled={isDisabled || loading}>
        <AppText
          weight={MEDIUM}
          type={SIXTEEN}
          color={WHITE}
          style={{ textAlign: 'center' }
          }>
          Next
        </AppText>
      </TouchableOpacity>
      {loading && <AppText style={{ marginTop: 20 }} color={GREY}>Please wait</AppText>}
      {success && <AppText style={{ marginTop: 20 }}>We have logged your period length!</AppText>}
      {error && <AppText style={{ marginTop: 20 }} color={RED}>Error: {error}</AppText>}
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
    textAlign:
      'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Step2;
