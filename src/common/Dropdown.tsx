import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {AppText, BLACK, SEMI_BOLD} from '../common/AppText';
import {Dropdown as _DropDown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {COLORS, FONTS} from '../constants/themes';

interface _DropdownProps<T extends DropdownItemProps> extends DropdownProps<T> {
  title?: string;
  data: T[];
  value: string;
  onChange: (item: T) => void;
  label?: string;
  container?: ViewStyle;
  placeholder?: string;
  dropdown?: ViewStyle;
}

interface DropdownItemProps {
  label: string;
  value: string;
}

const Dropdown = <T extends DropdownItemProps>({
  title,
  data,
  onChange,
  value,
  label,
  container,
  placeholder,
  dropdown,
  ...rest
}: _DropdownProps<T>) => {
  const _renderItem = (item: DropdownItemProps) => {
    return (
      <View style={[styles.item, {}]}>
        <AppText color={BLACK} weight={SEMI_BOLD} style={styles.textItem}>
          {item.label}
        </AppText>
      </View>
    );
  };

  return (
    <View style={[styles.container, container]}>
      {title && <AppText>{title}</AppText>}
      <_DropDown
        {...rest}
        style={[styles.dropdown, dropdown]}
        containerStyle={styles.shadow}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconColor={COLORS.primary}
        data={data}
        placeholder={
          data.length > 0
            ? placeholder
              ? placeholder
              : 'Please select'
            : 'Loading...'
        }
        value={value}
        onChange={item => {
          if (onChange) {
            onChange(item as T);
          }
        }}
        showsVerticalScrollIndicator={false}
        renderItem={item => _renderItem(item)}
        labelField="label"
        valueField="value"
        mode="default"
      />
    </View>
  );
};

export {Dropdown};

const styles = StyleSheet.create({
  container: {
    marginStart: 2,
  },
  dropdown: {
    width: 30,
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.border,
    borderBottomWidth: 0.5,
  },
  textItem: {
    // flex: 1,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: 100,
  },

  placeholderStyle: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.Regular,
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.Regular,
  },
  titleStyle: {
    color: COLORS.black,
    fontSize: 15,
    fontFamily: FONTS.Medium,
  },
});
