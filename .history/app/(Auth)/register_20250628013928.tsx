import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/screenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const Register = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  // Function to handle login logic can be added here
  const handleSubmit = async () => {
    setIsLoading(true);
    if(!emailRef.current || !passwordRef.current || !nameRef.current) {
        alert("Please fill in all fields");
      console.log("Please fill in all fields");
        setIsLoading(false);
        return;
    }
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
            Lets,
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get Started
          </Typo>
        </View>
        {/* Form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            SignUp to track your expenses
          </Typo>
          {/* Inputs */}
          <Input
            onChangeText={(text) => (emailRef.current = text)}
            placeholder="Enter your Name"
            icon={<Icons.User size={20} color={colors.neutral300} />}
          />
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
            SignUp
          </Typo>
        </Button>

        {/* Footer */}

        <View style={styles.footer}>
          <Typo size={16} color={colors.textLighter}>
            Already have an account?
          </Typo>
          <Pressable
            onPress={() => {
              router.push("/(Auth)/register");
            }}
          >
            <Typo
              size={16}
              fontWeight={"700"}
              color={colors.primary}
              style={{ fontStyle: "italic" }}
            >
              SignUp
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

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
