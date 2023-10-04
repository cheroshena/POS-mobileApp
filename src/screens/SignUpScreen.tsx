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
import { LOG_IN_SCREEN } from '../utils/constants1';
import PrimaryButton from "../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";


const SignUpScreen = ({ navigation }: RootStackScreenProps<"signUpScreen">) => {

    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const { colors } = useTheme();
    const [npasswordVisible, setNPasswordVisible] = useState(false);
    const [cpasswordVisible, setCPasswordVisible] = useState(false);
    const [npassword, setNPassword] = useState('');
    const [cpassword, setCPassword] = useState('');


    const toggleNPasswordVisibility = () => {
        setNPasswordVisible(!npasswordVisible);
    };
    const toggleCPasswordVisibility = () => {
        setCPasswordVisible(!cpasswordVisible);
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
                    <Artwork03 width={140} height={2140} />
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
                                placeholder="User Name"
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
                                name="person"
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
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            style={{ position: "relative", width: "100%" }}
                        >
                            <TextInput
                                placeholder="E-Mail"
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
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            style={{ position: "relative", width: "100%" }}
                        >
                            <TextInput
                                placeholder="Home Address"
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
                                name="location-on"
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
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            style={{ position: "relative", width: "100%" }}
                        >
                            <TextInput
                                placeholder="Mobile Number"
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
                                name="call"
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
                            entering={FadeInDown.delay(400).duration(1000).springify()}
                            style={{ position: "relative", width: "100%" }}
                        >
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry={!cpasswordVisible}
                                value={cpassword}
                                onChangeText={(text) => setCPassword(text)}
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
                                name={cpasswordVisible ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={theme.colors.text}
                                style={{
                                    position: "absolute",
                                    left: 12,
                                    top: 12,
                                    opacity: 0.5,
                                }}
                                onPress={toggleCPasswordVisibility}
                            />
                        </Animated.View>
                        <Animated.View
                            entering={FadeInDown.delay(600).duration(1000).springify()}
                        >
                            <PrimaryButton
                                label="SignUp"
                                onPress={() => navigation.navigate("TabsStack",{screen:"Home"})}
                            />
                        </Animated.View>
                        <View style={{ marginTop: 10, flexDirection: 'row', gap: 5, }}>


                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("loginScreen");
                            }}>
                                <Text style={{
                                    fontWeight: "800",
                                    color: colors.primary
                                }}>LogIn</Text>
                            </TouchableOpacity>

                        </View>

                    </View>


                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen