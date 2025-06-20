import ScreenWrapper from '@/components/screenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login button and Image */}
        <View style={styles.loginButton}>
         <TouchableOpacity onPress={() => console.log('Login Pressed')}>
            <Typo size={16} fontWeight={'500'} color={colors.primary}>
              SignIn
            </Typo>
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/welcome.png')}
              style={styles.welcomeImage}
              resizeMode="contain"
              />
          </View>
      </View>
    </ScreenWrapper>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY ._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },
  loginButton:{
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
  },
  footer:{
    backgroundColor: colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(30),
    gap: spacingY._20,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    elevation: 10,
    shadowOpacity: 0.15,
    shadowRadius: 25,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  }

})