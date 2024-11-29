//change due date screen
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS, COLORS} from '../../../constants/themes';
import {
  AppText,
  FIFTEEN,
  MEDIUM,
  SEMI_BOLD,
  TEN,
  TWENTY,
} from '../../../common/AppText';
import DatePicker from 'react-native-date-picker';

interface StepProps {
  onNext: () => void;
}

const Step3: React.FC<StepProps> = ({onNext}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDateInputChange = () => {
    Keyboard.dismiss();
    setOpen(true);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleDateInputChange()}
          style={[
            styles.containerblock,
            {
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 8,
            },
          ]}>
          <AppText weight={SEMI_BOLD} type={FIFTEEN}>
            {'Due Date'}
          </AppText>
          <View
            style={{
              height: 70,
              justifyContent: 'center',
            }}>
            <AppText type={TWENTY}>
              {date?.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </AppText>
          </View>
        </TouchableOpacity>
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
        <DatePicker
          mode="date"
          dividerColor={COLORS.primary}
          buttonColor={COLORS.primary}
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setDate(date);
            setOpen(false);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  containerblock: {
    width: 300,
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

export default Step3;
