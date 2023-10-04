import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Artwork03 from "../components/artworks/Artwork03";
import { LOG_IN_SCREEN } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const LoginScreen = ({ navigation }: RootStackScreenProps<"loginScreen">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const { colors } = useTheme();
  const [npasswordVisible, setNPasswordVisible] = useState(false);
  const [npassword, setNPassword] = useState('');


  const toggleNPasswordVisibility = () => {
    setNPasswordVisible(!npasswordVisible);
  };
  return (





    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        {/* It Works! */}
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Artwork03 width={240} height={240} />
        </Animated.View>

        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.description}
          </Animated.Text>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder="Your Email"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#f1f1f1",
                  width: "100%",
                }}
              />
              <Icons
                name="email"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder="Password"
                secureTextEntry={!npasswordVisible}
                value={npassword}
                onChangeText={(text) => setNPassword(text)}
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#f1f1f1",
                  
                  width: "100%",
                }}
              />
              <Icons
                name={npasswordVisible ? 'visibility-off' : 'visibility'}
                onPress={toggleNPasswordVisibility}
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Log In"
                onPress={() => navigation.navigate("signUpScreen")}
              />
            </Animated.View>
            <View style={{ marginTop: 10, flexDirection: 'row', gap: 5, }}>


              <Text>Don't you have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("signUpScreen")}>
                <Text style={{
                  fontWeight: "800",
                  color: colors.primary
                }}>SignUp</Text>
              </TouchableOpacity>

            </View>

          </View>


        </View>

      </SafeAreaView>
    </KeyboardAvoidingView>




  )
}

export default LoginScreen