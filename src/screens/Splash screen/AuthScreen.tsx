import React from 'react'
import { View } from 'react-native'
import { AppText } from '../../common/AppText'
import { AppSafeAreaView } from '../../common/AppSafeAreaView'

function AuthScreen(): React.JSX.Element {
  return (
    <AppSafeAreaView>
      <View style={{flex: 1,
      flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}>
      <AppText>auth screen</AppText>
      </View>

    </AppSafeAreaView>
  )
}

export default AuthScreen