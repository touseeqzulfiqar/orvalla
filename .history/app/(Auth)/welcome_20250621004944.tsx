import ScreenWrapper from "@/components/screenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  const handleLoginPress = () => {
    console.log("Login Pressed");
    // navigate to login screen if needed
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Top Right Login Button */}
        <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton}>
          <Typo size={16} fontWeight="500" color={colors.primary}>
            Sign In
          </Typo>
        </TouchableOpacity>

        {/* Welcome Image */}
        <Image
          source={require("../../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode="contain"
        />

        {/* Footer Text */}
        <View>
          <View style={{ alignItems: "center" }}>
            <Typo
              size={30}
              fontWeight="800"
              style={{ fontStyle: "italic" }}
              color={colors.white}
            >
              Always Take Control
            </Typo>
            <Typo
              size={30}
              fontWeight="800"
              style={{ fontStyle: "italic" }}
              color={colors.white}
            >
              Of Your Finances
            </Typo>
          </View>
        </View>
        {/* Footer Text */}
          <View style={{ alignItems: "center", gap: 2 }}>
            <Typo size={17} color={colors.textLight}>
              Always Take Control
            </Typo>
            <Typo size={17} color={colors.textLight}>
              Of Your Finances
            </Typo>
          </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleLoginPress}
            
          >
            <Typo size={16} fontWeight="500" color={colors.white}>
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
  footer: {
    fontStyle: "italic",
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingVertical: verticalScale(30),
    gap: spacingY._20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 10,
  },
  buttonContainer: {
   
  }
});
