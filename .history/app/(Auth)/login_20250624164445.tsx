import ScreenWrapper from '@/components/screenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { StyleSheet } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
      <Typo>login</Typo>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    }
})