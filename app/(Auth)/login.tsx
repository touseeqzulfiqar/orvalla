import ScreenWrapper from '@/components/screenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
        <Typo style={styles.welcomeText} fontWeight="bold" size={20}>
            Welcome Back
        </Typo>
        <Typo style={styles.welcomeText} fontWeight="500" size={16}>
            Please login to continue
        </Typo>
    
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text,
    },
    form:{
        gap: spacingY._20,
    },
    forgetPassword:{
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        color: colors.text,
        textAlign: 'center',
        fontSize: verticalScale(15),
    },
})