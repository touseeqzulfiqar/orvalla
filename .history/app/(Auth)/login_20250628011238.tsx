import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/screenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import * as Icons from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  // Function to handle login logic can be added here
  const handleSubmit = async () => {
    setIsLoading(true);
    // Logic to handle login
    console.log("Email:", emailRef.current);
    console.log("Password:", passwordRef.current);
    setTimeout(() => {
      // Simulating a network request
      console.log("Login successful");
      setIsLoading(false);
    }, 2000);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome Back
          </Typo>
        </View>
        {/* Form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login to track your expenses
          </Typo>
          {/* Inputs */}
          <Input
            onChangeText={(text) => (emailRef.current = text)}
            placeholder="Enter your email"
            icon={<Icons.At size={20} color={colors.neutral300} />}
          />
          <Input
            onChangeText={(text) => (passwordRef.current = text)}
            placeholder="Enter your password"
            icon={<Icons.Password size={20} color={colors.neutral300} />}
            secureTextEntry
          />
        </View>
        <Button loading={isLoading} onPress={handleSubmit}>
          <Typo
            size={18}
            fontWeight={"600"}
            color="black"
            style={{ fontStyle: "italic" }}
          >
            Login
          </Typo>
        </Button>

        {/* Footer */}

        <View style={styles.footer}>
          <Typo size={16} color={colors.textLighter}>
            Forgot your password?
          </Typo>
          <Pressable
            onPress={() => {
              // Logic to handle forgot password
              console.log("Forgot Password Pressed");
            }}
            >
            <Typo />
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingY._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgetPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    color: colors.text,
    textAlign: "center",
    fontSize: verticalScale(15),
  },
});
