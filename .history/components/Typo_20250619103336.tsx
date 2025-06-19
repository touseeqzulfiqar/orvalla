import { colors } from '@/constants/theme';
import { TypoProps } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  return (
      <Text style={style}>Typo</Text>
  );
};

export default Typo

const styles = StyleSheet.create({})