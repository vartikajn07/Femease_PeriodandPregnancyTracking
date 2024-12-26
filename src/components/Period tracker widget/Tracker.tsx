import React from 'react'
import { StyleSheet, View } from 'react-native'
import Periodtracker from './Periodtracker'
import Trackerwidget from './Trackerwidget'

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
    height: 280,
    // gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    }
})

export default Tracker
