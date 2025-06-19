import { colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 100, height: 100 }}
        />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900,
    },
    text: {
        color: colors.text,
        fontSize: 20,
    },
})