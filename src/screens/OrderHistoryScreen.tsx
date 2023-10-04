import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";
import TabsNavigator from '../navigators/TabsNavigator';

import { useNavigation } from '@react-navigation/native';


const OrderHistoryScreen = ({ navigation }: RootStackScreenProps<"OrderHistory">) => {
    const { colors } = useTheme();
    const homeNavigation = useNavigation();
    return (
        <View style={{ padding: 12 }}>

            <SafeAreaView style={{ paddingVertical: 22, gap: 1 }}>

                {/*Header Section*/}
                <View style={{ marginTop: 1, paddingHorizontal: 12, flexDirection: "row", alignItems: "center", gap: 12 }}>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 2, color: colors.text }}
                            numberOfLines={1}>Cheroshena Fernando </Text>
                        <Text style={{ fontSize: 13, marginBottom: 2, color: colors.text, opacity: 0.75 }}
                            numberOfLines={1}>fwpcheroshena@gmail.com</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("TabsStack", { screen: "Home" });
                          }}
                        style={{
                            width: 42,
                            aspectRatio: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 52,
                            borderWidth: 1,
                            borderColor: colors.border,
                        }}>
                        <Icons name='home' size={22} color={colors.text} />
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={{ flex: 1 }}>



                        <Card
                            orderId="41VM7772BXUQFD20123LN"
                            orderStatus="Completed"
                            orderStatusClr="#2fbd00"
                            onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                            onPresss={() => { navigation.navigate("Feedback", { id: "123", }); }}
                            quantity={1}
                            brand="Addidas"
                            title="Incooler Water Bottle "
                            price={2000}
                            imageUrl="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        />
                        <Card
                            orderId="23KNE9401J4327J27GD83G"
                            orderStatus="Packing"
                            orderStatusClr="#017dff"
                            onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                            onPresss={() => { navigation.navigate("Feedback", { id: "123", }); }}
                            quantity={3}
                            brand="Cocacola"
                            title="Sprite "
                            price={2400}
                            imageUrl="https://images.unsplash.com/photo-1690988109041-458628590a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>

        </View >
    )
}

export default OrderHistoryScreen

const Card = ({ orderId, orderStatusClr, orderStatus, brand, quantity, price, imageUrl, title, onPress,onPresss }: { orderId: string, orderStatusClr: string, orderStatus: string, brand: string, quantity: number, price: number; imageUrl: string; title: string, onPresss?: () => void ,onPress?: () => void }) => {
    const { colors } = useTheme();
    const feedbackNavigation = useNavigation();


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: colors.text, marginRight: 10 }}
                    numberOfLines={1}>Order Status</Text>
                <Text style={{ fontSize: 13, fontWeight: "600", marginBottom: 2, color: orderStatusClr }}
                    numberOfLines={1}>{orderStatus}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 2, marginTop: 10, color: colors.text }}
                    numberOfLines={1}>Order ID</Text>
                <Text style={{ fontSize: 10, marginBottom: 2, color: colors.text, opacity: 0.75 }}
                    numberOfLines={1}>{orderId}</Text>
            </View>

            <View style={styles.container}>
                <View style={{ margin: 2 }}>
                    <Image
                        source={{ uri: imageUrl }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
                        <Text style={styles.brand}>Brand :</Text><Text style={styles.brand}>{brand}</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
                        <Text style={styles.discountHead}>Quantity</Text><Text style={styles.quantity}>{quantity}</Text>
                        <Text style={styles.price}>LKR {(price).toLocaleString()}</Text>
                    </View>


                </View>




            </View>
            <View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>

                    <TouchableOpacity 
                    onPress={onPresss}
                        style={{

                            borderColor: colors.primary,
                            height: 40,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: "relative",
                            flexDirection: "row",
                            padding: 9,
                            width: 220,
                            margin: 2,
                            marginBottom: 12,
                            borderWidth: 1,

                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: colors.primary
                            }}>
                            Give Your Feedback & Ratings
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>


        </TouchableOpacity>



    )
}

// card Style Sheet
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',


        marginBottom: 1,
        borderRadius: 10,
        padding: 9,
        elevation: 2, // Add shadow (Android)
        shadowColor: '#000', // Add shadow (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow (iOS)

        margin: 6,
        borderColor: "#000"
    },
    image: {
        height: 75,
        width: 45,
        borderRadius: 8,
        marginRight: 12

    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 13,
        fontWeight: "600",
        marginTop: 1,
        color: "black"


    },
    price: {
        marginTop: 2,
        fontSize: 18,
        fontWeight: "600",
        color: '#777',
        marginLeft: 90
    },
    brand: {
        fontSize: 13,
        color: '#777',
        marginTop: 2

    },

    quantity: {
        fontSize: 19,
        color: '#464646',
        marginTop: 3,
        marginLeft: 12,
        fontWeight: "600",

    },
    discountHead: {
        fontSize: 13,
        color: '#464646',
        marginTop: 3,

        fontWeight: "600",

    },

});