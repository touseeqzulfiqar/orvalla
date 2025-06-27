import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/screenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
        <BackButton iconSize={28}/>
        <View style={{gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={'800'}>Hey,</Typo>
            <Typo size={30} fontWeight={'800'}>Welcome Back</Typo>
        </View>
        {/* Form */}
        <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>Login to track your expenses</Typo>
            {/* Add your login form here */}
        </View>
        </View>
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