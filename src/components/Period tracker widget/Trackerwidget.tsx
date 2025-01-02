import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppText, FOURTEEN, SEMI_BOLD, TEN, WHITE } from '../../common/AppText'
import { COLORS } from '../../constants/themes'

const Trackerwidget = () => {
  return (

    <View style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <AppText type={FOURTEEN} color={WHITE} weight={SEMI_BOLD}>Day 26</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerCircle: {
    width: 160,
    height: 160,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 70,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Trackerwidget