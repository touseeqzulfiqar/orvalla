import { colors } from '@/constants/theme';
import { TypoProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
    const textStyle = {
        fontSize: size? verticalScale(size) : verticalScale(18),
        color: color,
        fontWeight: fontWeight,
    };
  return (
      <Text style={[style]}>Typo</Text>
  );
};

export default Typo

const styles = StyleSheet.create({})