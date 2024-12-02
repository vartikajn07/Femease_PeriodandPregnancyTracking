import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants/themes';
import {
  AppText,
  GREY,
  MEDIUM,
  PRIMARY,
  SEMI_BOLD,
  SIXTEEN,
  TWENTY,
  WHITE,
} from '../../../common/AppText';
import Scrollpicker from '../../../common/Scrollpicker';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/RootNavigator';

const Step4 = () => {
  const [weight, setWeight] = useState('30');
  const [height, setHeight] = useState('100');
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
  //for weight
  const onValueChange = (value: string | undefined, index: number) => {
    if (value) {
      setWeight(value);
    }
  };
  //for height
  const onValueChangeforHeight = (value: string | undefined, index: number) => {
    if (value) {
      setHeight(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
        <View style={styles.content}>
          <AppText weight={SEMI_BOLD} type={TWENTY}>
            Your weight?
          </AppText>
          <View style={styles.scrollerbox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                maxHeight: 180,
                maxWidth: 80,
              }}>
              <Scrollpicker
                dataSource={Array.from({length: 150}, (_, i) => `${i + 1}`)}
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
          <View style={styles.scrollerbox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                maxHeight: 180,
                maxWidth: 80,
              }}>
              <Scrollpicker
                dataSource={Array.from({length: 200}, (_, i) => `${i + 1}`)}
                selectedIndex={parseInt(height) - 1}
                onValueChange={onValueChangeforHeight}
                itemHeight={60}
                highlightColor={COLORS.black}
                renderItem={renderItem}
                highlightBorderWidth={1}
              />
            </View>
            <AppText weight={MEDIUM} type={TWENTY}>
              cm
            </AppText>
          </View>
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
  contentcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
  },
  content: {
    paddingHorizontal: 10,
    width: 350,
    gap: 10,
  },
  scrollerbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    marginTop: 10,
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
export default Step4;
