import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import Icons from "@expo/vector-icons/MaterialIcons";
import { RootStackScreenProps } from '../navigators/RootNavigator';
import { useTheme } from '@react-navigation/native';




const OrderMethodScreen = ({ navigation, route: { params: { id } } }: RootStackScreenProps<"OrderMethod">) => {
    const { colors } = useTheme();
    const dropbox = require('../assets/images/dropbox.png');
    return (

        <View style={{ flex: 1, backgroundColor: '#cecfd0' }}>


            <View
                style={{
                    marginTop: 50,
                    flexDirection: 'row',
                    alignItems: "center",
                    padding: 20,
                    gap: 20
                }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 52,
                        aspectRatio: 1,
                        alignItems: 'center',
                        justifyContent: "center",
                        borderRadius: 52,
                        borderWidth: 1,
                        borderColor: colors.text
                    }}>
                    <Icons name='arrow-back' size={24} color={colors.text} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                

            </View>
            <View>
                <View style={{
                    flexDirection: 'column',
                    alignItems: "center",
                    gap: 20
                }}>
                    <Text
                        style={{
                            fontSize: 22,
                            flexDirection: 'column',
                            alignItems: "center",
                            marginTop: 90,
                            fontWeight: "600",
                            marginRight: 12,
                            marginLeft: 12,
                            marginBottom: 20,
                        }}>
                        Choose the Order Option
                    </Text>
                    <View style={{ margin: 1 }}>
                        <Image
                            source={dropbox}


                            style={{
                                height: 260,
                                width: 260,
                                margin: 32

                            }}

                        />
                    </View>
                </View>

            </View>
            <View
                style={{
                    marginTop: 70,
                    flexDirection: 'row',
                    alignItems: "center",
                    padding: 35,
                    gap: 10
                }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("OrderDetails", { id: "123" });}}
                    style={{
                        backgroundColor: colors.text,
                        width: 130,
                        height: 55,
                        alignItems: 'center',
                        justifyContent: "center",
                        borderRadius: 12,
                    }}>
                    <Text style={{
                        color: colors.card,
                        fontSize: 15,
                        fontWeight: '700',
                    }}>Pick Up</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <TouchableOpacity
                onPress={() => { navigation.navigate("OrderDetails", { id: "123" });}}
                    style={{
                        backgroundColor: colors.text,
                        width: 130,
                        height: 55,
                        alignItems: 'center',
                        justifyContent: "center",
                        borderRadius: 12,
                    }}>

                    <Text style={{
                        color: colors.card,
                        fontSize: 15,
                        fontWeight: '700',
                    }}>Place Order</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default OrderMethodScreen

