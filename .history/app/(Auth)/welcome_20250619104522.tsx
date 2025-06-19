import ScreenWrapper from '@/components/screenWrapper';
import Typo from '@/components/Typo';
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
    alignItems: 'center',
  }
})