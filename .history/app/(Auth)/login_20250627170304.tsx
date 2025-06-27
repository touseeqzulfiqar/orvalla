import BackButton from '@/components/backButton'
import ScreenWrapper from '@/components/screenWrapper'
import { colors, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
        <BackButton/>
        <View style={styles.container}>

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