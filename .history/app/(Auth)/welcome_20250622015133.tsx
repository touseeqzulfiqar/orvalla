import ScreenWrapper from "@/components/screenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Button } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const Welcome = () => {
  const handleLoginPress = () => {
    console.log("Login Pressed");
    // TODO: Navigate to login screen
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Top Right Sign In Button */}
        <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton}>
          <Typo size={16} fontWeight="500" color={colors.primary}>
            Sign In
          </Typo>
        </TouchableOpacity>

        {/* Welcome Image */}
        <Animated.Image
        entering={FadeIn}
          source={require("../../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode="contain"
        />

        {/* Motivational Text */}
        <View style={styles.centerAlign}>
          <Typo
            size={30}
            fontWeight="800"
            style={styles.italicText}
            color={colors.white}
          >
            Always Take Control
          </Typo>
          <Typo
            size={30}
            fontWeight="800"
            style={styles.italicText}
            color={colors.white}
          >
            Of Your Finances
          </Typo>
        </View>

        {/* Supporting Text */}
        <View style={styles.centerAlign}>
          <Typo size={17} color={colors.textLight}>
            Always Take Control
          </Typo>
          <Typo size={17} color={colors.textLight}>
            Of Your Finances
          </Typo>
        </View>

        {/* Get Started Button */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleLoginPress}
            color={colors.primary}
            style={styles.getStartedButton}
          >
            <Typo size={16} fontWeight="800" color={colors.neutral900} style={{fontStyle: 'italic'}}>
              Get Started
            </Typo>
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
    marginTop: spacingY._10,
    padding: spacingY._5,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(50),
  },
  centerAlign: {
    alignItems: "center",
    gap: 2,
  },
  italicText: {
    fontStyle: "italic",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  getStartedButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: colors.primary,
    width: "80%",
    alignSelf: "center",
  },
});
