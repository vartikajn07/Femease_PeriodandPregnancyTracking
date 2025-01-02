import React from 'react'
import { StyleSheet, View } from 'react-native'
import Periodtracker from './Periodtracker'
import Trackerwidget from './Trackerwidget'
import { AppText } from '../../common/AppText'

const Tracker = () => {
  return (
    <View style={styles.container}>
      <Periodtracker />
      <Trackerwidget />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 290,
    // gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default Tracker
