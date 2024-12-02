//change due date screen
import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {
  AppText,
  FIFTEEN,
  GREY,
  MEDIUM,
  PRIMARY,
  SEMI_BOLD,
  TEN,
  TWENTY,
} from '../../../common/AppText';
import Scrollpicker from '../../../common/Scrollpicker';

interface StepProps {
  onNext: () => void;
}

const Step3: React.FC<StepProps> = ({onNext}) => {
  const [date, setDate] = useState(new Date());

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
      const currentDate = new Date(date);
      currentDate.setDate(parseInt(value));
      setDate(currentDate);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerblock}>
          <AppText type={TWENTY} weight={SEMI_BOLD}>
            Due Date
          </AppText>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            {/* day scroller */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                maxHeight: 180,
                maxWidth: 80,
              }}>
              <Scrollpicker
                dataSource={Array.from({length: 31}, (_, i) => `${i + 1}`)}
                selectedIndex={date.getDate() - 1}
                onValueChange={value => onValueChange(value, 0)}
                itemHeight={60}
                highlightColor={COLORS.black}
                renderItem={renderItem}
                highlightBorderWidth={1}
              />
            </View>
            {/* month scroller */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                maxHeight: 180,
                maxWidth: 80,
              }}>
              <Scrollpicker
                dataSource={[
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ]}
                selectedIndex={date.getMonth()}
                onValueChange={value => {
                  if (value) {
                    const currentDate = new Date(date);
                    currentDate.setMonth(
                      [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ].indexOf(value),
                    );
                    setDate(currentDate);
                  }
                }}
                itemHeight={60}
                highlightColor={COLORS.black}
                renderItem={renderItem}
                highlightBorderWidth={1}
              />
            </View>
            {/* year scroller */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                maxHeight: 180,
                maxWidth: 80,
              }}>
              <Scrollpicker
                dataSource={Array.from({length: 200}, (_, i) => `${1900 + i}`)}
                selectedIndex={date.getFullYear() - 1900}
                onValueChange={value => {
                  if (value) {
                    const currentDate = new Date(date);
                    currentDate.setFullYear(parseInt(value));
                    setDate(currentDate);
                  }
                }}
                itemHeight={60}
                highlightColor={COLORS.black}
                renderItem={renderItem}
                highlightBorderWidth={1}
              />
            </View>
          </View>
        </View>
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
    </>
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
  containerblock: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 40,
  },
  Nextbtn: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#E392A1',
    color: '#ffff',
    width: '95%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Step3;
