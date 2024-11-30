import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {
  AppText,
  GREY,
  MEDIUM,
  PRIMARY,
  SEMI_BOLD,
  TEN,
  TWENTY,
} from '../../../common/AppText';
import Scrollpicker from '../../../common/Scrollpicker';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/RootNavigator';

interface StepProps {
  onNext: () => void;
}

const Step4 = () => {
  const [weight, setWeight] = useState('10');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNext = () => {
    navigation.navigate('PregnancyHome');
  };
  const renderItem = (data: string, index: number, isSelected: boolean) => {
    const itemColor = isSelected ? PRIMARY : GREY;
    return (
      <View>
        <AppText
          type={TWENTY}
          weight={SEMI_BOLD}
          color={itemColor}
          style={{textAlign: 'center'}}>
          {data}
        </AppText>
      </View>
    );
  };
  const onValueChange = (value: string | undefined, index: number) => {
    if (value) {
      setWeight(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText weight={SEMI_BOLD} type={TWENTY}>
          Your weight?
        </AppText>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              maxHeight: 180,
              maxWidth: 200,
            }}>
            <Scrollpicker
              dataSource={Array.from({length: 200}, (_, i) => `${i + 1}`)}
              selectedIndex={parseInt(weight) - 1}
              onValueChange={onValueChange}
              itemHeight={60}
              highlightColor={COLORS.black}
              renderItem={renderItem}
              highlightBorderWidth={1}
            />
          </View>
          <AppText weight={MEDIUM} type={TWENTY}>
            kg
          </AppText>
        </View>
      </View>
      <View style={styles.content}>
        <AppText weight={SEMI_BOLD} type={TWENTY}>
          Your height?
        </AppText>
        <View
          style={{
            maxHeight: 180,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Scrollpicker
              dataSource={Array.from({length: 200}, (_, i) => `${i + 1}`)}
              selectedIndex={parseInt(weight) - 1}
              onValueChange={onValueChange}
              itemHeight={60}
              highlightColor={COLORS.black}
              renderItem={renderItem}
              highlightBorderWidth={2}
            />
            <AppText weight={MEDIUM} type={TWENTY}>
              cm
            </AppText>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.Nextbtn}>
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
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  content: {
    paddingHorizontal: 20,
    gap: 20,
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
  pickerItem: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Step4;

// <View style={{maxHeight: 180}}>
// <ScrollPicker
//   dataSource={Array.from({length: 50}, (_, i) => `${i + 1}`)}
//   selectedIndex={parseInt(weight) - 1}
//   renderItem={data => (
//     <View style={{width: 100}}>
//       <Text style={styles.pickerItem}>{data}</Text>
//     </View>
//   )}
//   onValueChange={data => setWeight(data as string)}
//   wrapperHeight={200}
//   wrapperBackground="#FFFFFF"
//   itemHeight={60}
//   highlightColor="#E392A1"
//   highlightBorderWidth={1}
// />
// </View>
