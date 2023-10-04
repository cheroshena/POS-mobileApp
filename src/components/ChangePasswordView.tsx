import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from "@expo/vector-icons/MaterialIcons";


const ChangePasswordView = () => {
    const { colors } = useTheme();
    const theme = useTheme()
    const insets = useSafeAreaInsets();
    const [opasswordVisible, setOPasswordVisible] = useState(false);
    const [npasswordVisible, setNPasswordVisible] = useState(false);
    const [cpasswordVisible, setCPasswordVisible] = useState(false);
    const [opassword, setOPassword] = useState('');
    const [npassword, setNPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const toggleOPasswordVisibility = () => {
        setOPasswordVisible(!opasswordVisible);
    };
    const toggleNPasswordVisibility = () => {
        setNPasswordVisible(!npasswordVisible);
    };
    const toggleCPasswordVisibility = () => {
        setCPasswordVisible(!cpasswordVisible);
    };
    return (
        <View
            style={{
                flex: 1
            }}>
            <ScrollView style={{
                flex: 1
            }}>
                <View style={{ paddingVertical: 24, gap: 24,marginBottom:240 }}>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24 }}>
                        <Text style={{ flex: 1, fontSize: 23, fontWeight: "700" }}>Change Password</Text>
                        <TouchableOpacity>
                            <Text style={{ flex: 1, fontSize: 15, paddingTop: 10, fontWeight: "500" }}>Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            Old Password
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!opasswordVisible}
                                value={opassword}
                                onChangeText={(text) => setOPassword(text)}
                                multiline={false} // This ensures the icon is on the same line as the text
                            />
                            <Icons
                                name={opasswordVisible ? 'visibility-off' : 'visibility'} // Use Material Icons names
                                size={24}
                                color="gray"
                                style={styles.icon}
                                onPress={toggleOPasswordVisibility}
                            />
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            New Password
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!npasswordVisible}
                                value={npassword}
                                onChangeText={(text) => setNPassword(text)}
                                multiline={false} // This ensures the icon is on the same line as the text
                            />
                            <Icons
                                name={npasswordVisible ? 'visibility-off' : 'visibility'} // Use Material Icons names
                                size={24}
                                color="gray"
                                style={styles.icon}
                                onPress={toggleNPasswordVisibility}
                            />
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            Confirm Password
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!cpasswordVisible}
                                value={cpassword}
                                onChangeText={(text) => setCPassword(text)}
                                multiline={false} // This ensures the icon is on the same line as the text
                            />
                            <Icons
                                name={cpasswordVisible ? 'visibility-off' : 'visibility'} // Use Material Icons names
                                size={24}
                                color="gray"
                                style={styles.icon}
                                onPress={toggleCPasswordVisibility}
                            />
                        </View>

                    </View>



                </View>
            </ScrollView>
            {/*Buttons*/}

            <View style={{ padding: 24, paddingBottom: 24 + insets.bottom, }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: theme.colors.primary,
                        height: 64,
                        borderRadius: 64,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "relative"

                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: theme.colors.background
                        }}>
                        Done
                    </Text>
                    <View
                        style={{
                            backgroundColor: theme.colors.card,
                            width: 40, aspectRatio: 1,
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: "center",
                            position: "absolute",
                            top: 12,
                            right: 12,
                            bottom: 12
                        }} >
                        <Icons name="done" size={24} color={theme.colors.text} />
                    </View>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default ChangePasswordView

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 16,
    },
    input: {
        flex: 1,
        height: 52,
        paddingHorizontal: 24,
    },
    icon: {
        marginRight: 10,
    },
})