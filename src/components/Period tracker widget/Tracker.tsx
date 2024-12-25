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
    maxHeight: 280,
    flex: 1,
    gap: 10,
    alignItems: 'center',
    }
})

export default Tracker
