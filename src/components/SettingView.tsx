import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from "@expo/vector-icons/MaterialIcons";

const SettingView = () => {
    const { colors } = useTheme();
    const theme = useTheme()
    const insets = useSafeAreaInsets();
    

    return (
        <View
            style={{
                flex: 1
            }}>
            <ScrollView style={{
                flex: 1
            }}>
                <View style={{ paddingVertical: 24, gap: 24 }}>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24 }}>
                        <Text style={{ flex: 1, fontSize: 23, fontWeight: "700" }}>Settings</Text>
                        <TouchableOpacity>
                        <Icons name='rotate-right' color={colors.text} style={{ opacity: 0.7 }} size={28} marginTop={13} marginRight={11} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            User Name
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        height: 52,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        borderColor: colors.border,
                                        alignItems: "center",
                                        paddingHorizontal: 24,
                                        flexDirection: "row",
                                        gap: 12,
                                        marginBottom: 0,
                                        width: 300,
                                    }} placeholder="Cheroshena Fernando"
                                >
                                </TextInput>
                            </KeyboardAvoidingView>
                        </View>
                      

                    </View>
                    
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            E-mail
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        height: 52,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        borderColor: colors.border,
                                        alignItems: "center",
                                        paddingHorizontal: 24,
                                        flexDirection: "row",
                                        gap: 12,
                                        marginBottom: 0,
                                        width: 300,
                                    }} placeholder="fwpcheroshena@gmail.com"
                                >
                                </TextInput>
                            </KeyboardAvoidingView>
                        </View>
                        {/* Sub category items main category or sub category */}

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            Province
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        height: 52,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        borderColor: colors.border,
                                        alignItems: "center",
                                        paddingHorizontal: 24,
                                        flexDirection: "row",
                                        gap: 12,
                                        marginBottom: 0,
                                        width: 300,
                                    }} placeholder="North-western"
                                >
                                </TextInput>
                            </KeyboardAvoidingView>
                        </View>
                        {/* Sub category items main category or sub category */}

                    </View>
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            Location
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        height: 52,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        borderColor: colors.border,
                                        alignItems: "center",
                                        paddingHorizontal: 24,
                                        flexDirection: "row",
                                        gap: 12,
                                        marginBottom: 0,
                                        width: 300,
                                    }} placeholder="Wennappuwa"
                                >
                                </TextInput>
                            </KeyboardAvoidingView>
                        </View>
                        {/* Sub category items main category or sub category */}

                    </View>
                    {/*Main location*/}
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 16,
                            opacity: 0.7,
                        }}>
                            Phone Number
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 250, }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        height: 52,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        borderColor: colors.border,
                                        alignItems: "center",
                                        paddingHorizontal: 24,
                                        flexDirection: "row",
                                        gap: 12,
                                        marginBottom: 0,
                                        width: 300,
                                    }} placeholder="0762675436"
                                >
                                </TextInput>
                            </KeyboardAvoidingView>
                        </View>
                        {/* Sub category items main category or sub category */}

                    </View>
                    {/*brands*/}

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
                        Save
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
                        <Icons name="bookmark" size={24} color={theme.colors.text} />
                    </View>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default SettingView

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
});