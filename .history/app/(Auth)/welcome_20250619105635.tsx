import ScreenWrapper from '@/components/screenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet } from 'react-native';
const Welcome = () => {
  return (
    <ScreenWrapper>
      <Typo size={30} fontWeight={'700'}>Welcome Page</Typo>
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
    gap: spacingY._10,
  }

})