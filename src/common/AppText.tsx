import React from 'react';
import {Text, StyleSheet, TextProps, TextStyle} from 'react-native';
import {FONTS, COLORS} from '../constants/themes';

export const THIRTEEN = 'THIRTEEN';
export const FIFTEEN = 'FIFTEEN';
export const SIXTEEN = 'SIXTEEN';
export const TWENTY = 'TWENTY';
export const TWENTY_FOUR = 'TWENTY_FOUR';
export const TWENTY_SIX = 'TWENTY_SIX';
export const FOURTEEN = 'FOURTEEN';
export const EIGHTEEN = 'EIGHTEEN';
export const NINETEEN = 'NINETEEN';
export const TWELVE = 'TWELVE';
export const FORTY = 'FORTY';
export const TWENTY_TWO = 'TWENTY_TWO';
export const THIRTY_FOUR = 'THIRTY_FOUR';
export const TEN = 'TEN';
export const ELEVEN = 'ELEVEN';
export const EIGHT = 'EIGHT';
export const NINE = 'NINE';
export const FIFTY = 'FIFTY';
export const FIVE = 'FIVE';
export const THIRTY = 'THIRTY';

export const NORMAL = 'normal';
export const MONTAGA_NORMAL = 'MONTAGA_NORMAL';
export const SEMI_BOLD = 'semibold';
export const MEDIUM = 'MEDIUM';
export const BOLD = 'BOLD';
export const EXTRA_LIGHT = 'EXTRA_LIGHT';
export const LIGHT = 'LIGHT';

export const WHITE = 'WHITE';
export const PRIMARY = 'PRIMARY';
export const SECOND = 'SECOND';
export const BLACK = 'BLACK';
export const ORANGE_SECOND = 'ORANGE_SECOND';
export const ORANGE_THIRD = 'ORANGE_THIRD';
export const SUCCESS = 'SUCCESS';
export const BLUE = 'BLUE';
export const RED = 'RED';
export const BLACK_FIFTY = 'BLACK_FIFTY';
export const GREY = 'GREY';

export const TWENTY_ONE_L = 'TWENTY_ONE_L';
export const THIRTY_SIX_L = 'THIRTY_SIX_L';
export const FIFTY_ONE_L = 'FIFTY_ONE_L';

interface AppTextProps extends TextProps {
  type?: number | string;
  weight?: string;
  style?: TextStyle;
  color?: string;
  line?: number;
}

const AppText = ({
  type,
  weight,
  style,
  color,
  line,
  ...props
}: AppTextProps) => {
  const getTextStyle = (type: any, weight: any, color: any, line: any) => {
    var style: TextStyle = {
      // fontFamily: fontFamily,
    };
    switch (type) {
      case FIFTY:
        style['fontSize'] = 50;
        break;
      case FIFTEEN:
        style['fontSize'] = 15;
        break;
      case TWENTY:
        style['fontSize'] = 20;
        break;
      case TWENTY_FOUR:
        style['fontSize'] = 24;
        break;
      case TWENTY_SIX:
        style['fontSize'] = 26;
        break;
      case FOURTEEN:
        style['fontSize'] = 14;
        break;
      case EIGHTEEN:
        style['fontSize'] = 18;
        break;
      case TWELVE:
        style['fontSize'] = 12;
        break;
      case NINETEEN:
        style['fontSize'] = 19;
        break;
      case FORTY:
        style['fontSize'] = 40;
        break;
      case SIXTEEN:
        style['fontSize'] = 16;
        break;
      case TWENTY_TWO:
        style['fontSize'] = 22;
        break;
      case THIRTY_FOUR:
        style['fontSize'] = 34;
        break;
      case THIRTEEN:
        style['fontSize'] = 13;
        break;
      case TEN:
        style['fontSize'] = 10;
        break;
      case ELEVEN:
        style['fontSize'] = 11;
        break;
      case EIGHT:
        style['fontSize'] = 8;
        break;
      case NINE:
        style['fontSize'] = 9;
        break;
      case FIVE:
        style['fontSize'] = 5;
        break;
      case THIRTY:
        style['fontSize'] = 30;
        break;
      default:
        style['fontSize'] = 12;
    }

    switch (weight) {
      case NORMAL:
        style['fontFamily'] = FONTS.Regular;
        break;
      case MEDIUM:
        style['fontFamily'] = FONTS.Medium;
        break;
      case SEMI_BOLD:
        style['fontFamily'] = FONTS.SemiBold;
        break;
      case BOLD:
        style['fontFamily'] = FONTS.Bold;
        break;
      case EXTRA_LIGHT:
        style['fontFamily'] = FONTS.ExtraLight;
        break;
      case LIGHT:
        style['fontFamily'] = FONTS.Light;
        break;
      case MONTAGA_NORMAL:
        style['fontFamily'] = FONTS.Montaga;
        break;
      default:
        style['fontFamily'] = FONTS.Regular;
    }
    switch (line) {
      case TWENTY_ONE_L:
        style['lineHeight'] = 21;
        break;
      case THIRTY_SIX_L:
        style['lineHeight'] = 36;
      case FIFTY_ONE_L:
        style['lineHeight'] = 51;
        break;
    }

    switch (color) {
      case WHITE:
        style['color'] = COLORS.white;
        break;
      case PRIMARY:
        style['color'] = COLORS.primary;
        break;
      case SECOND:
        style['color'] = COLORS.second_text;
        break;
      case ORANGE_SECOND:
        style['color'] = COLORS.orange_second;
        break;
      case ORANGE_THIRD:
        style['color'] = COLORS.orange_third;
        break;
      case BLUE:
        style['color'] = COLORS.blue;
        break;
      case RED:
        style['color'] = COLORS.red;
        break;
      case BLACK_FIFTY:
        style['color'] = COLORS.black_fifty;
        break;
      case SUCCESS:
        style['color'] = COLORS.success;
        break;
      case GREY:
        style['color'] = COLORS.dark_gray;
        break;

      default:
        style['color'] = COLORS.black;
    }

    return style;
  };
  const styles = {
    text: (type: any, weight: any, color: any, line: any) => ({
      ...getTextStyle(type, weight, color, line),
    }),
  };
  return (
    <Text
      allowFontScaling={false}
      style={StyleSheet.flatten([
        styles.text(type, weight, color, line),
        style,
      ])}
      {...props}
    />
  );
};

export {AppText};
