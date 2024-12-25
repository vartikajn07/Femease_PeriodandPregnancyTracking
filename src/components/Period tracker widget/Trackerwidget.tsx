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
    width: 150, 
    height: 150,
    borderRadius: 80, 
    borderWidth: 5, 
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  innerCircle: {
    width: 90, 
    height: 90,
    borderRadius: 60, 
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Trackerwidget