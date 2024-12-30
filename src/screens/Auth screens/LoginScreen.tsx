import React from 'react'
import { AppSafeAreaView } from '../../common/AppSafeAreaView'
import { AppText } from '../../common/AppText'
import { View } from 'react-native'

const LoginScreen = () => {
  return (
    <AppSafeAreaView>
        <View>
            <AppText>Login</AppText>
        </View>
    </AppSafeAreaView>
  )
}

export default LoginScreen