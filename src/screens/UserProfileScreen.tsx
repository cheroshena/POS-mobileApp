import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";



const AVATAR_URL = "https://cdn-icons-png.flaticon.com/512/3059/3059518.png";

const UserProfileScreen = () => {
    const { colors } = useTheme();
    return (
        <View >
            <ScrollView>
                <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
                    {/*Header Section*/}
                    <View style={{marginTop:24, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", gap: 12 }}>
                        <Image source={{
                            uri: AVATAR_URL,
                        }} style={{ width: 40, aspectRatio: 1, borderRadius: 40 }} resizeMode='cover' />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 2, color: colors.text }}
                                numberOfLines={1}>Cheroshena Fernando </Text>
                            <Text style={{ fontSize: 13, marginBottom: 2, color: colors.text, opacity: 0.75 }}
                                numberOfLines={1}>fwpcheroshena@gmail.com</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                width: 42,
                                aspectRatio: 1,
                                alignItems: 'center',
                                justifyContent: "center",
                                borderRadius: 52,
                                borderWidth: 1,
                                borderColor: colors.border,
                            }}>
                            <Icons name='settings' size={22} color={colors.text} />

                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default UserProfileScreen