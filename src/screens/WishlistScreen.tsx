import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, TextInput, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TabsStackScreenProps } from '../navigators/TabsNavigator'
import { useTheme } from '@react-navigation/native'
import Icons from "@expo/vector-icons/MaterialIcons";






const styless = StyleSheet.create({
    containerr: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 24, gap: 24
    },
    scrollView: {

    },
    text: {
        fontSize: 42,
    },
});









const WishlistScreen = ({ navigation }: TabsStackScreenProps<"Wishlist">) => {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [mainCategory, setMainCategory] = useState(0);
    return (
        <View>
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
                        borderColor: colors.text,
                    }}>
                    <Icons name='arrow-back' size={24} color={colors.text} />
                </TouchableOpacity>

                <View style={{ position: "relative", flex: 50, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <View>
                        <Text style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: "relative",
                            flexDirection: "row",
                            fontSize: 35,
                            fontWeight: "600",
                            color: colors.text
                        }}>Wishlist</Text>
                    </View>
                </View>


                <View style={{ flex: 1 }} />
                <TouchableOpacity
                    style={{
                        width: 52,
                        aspectRatio: 1,
                        alignItems: 'center',
                        justifyContent: "center",
                        borderRadius: 52,
                        borderWidth: 1,
                        borderColor: colors.text,
                    }}>
                    <Icons name='add-shopping-cart' size={24} color={colors.text} />

                </TouchableOpacity>

            </View>
            <ScrollView style={styless.scrollView}>
                <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>

                    {/*Search Section*/}
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30, gap: 12 }}>
                        <KeyboardAvoidingView>
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: 52,
                                    borderRadius: 52,
                                    borderWidth: 1,
                                    borderColor: colors.border,
                                    alignItems: "center",
                                    paddingHorizontal: 24,
                                    flexDirection: "row",
                                    gap: 12,
                                    marginBottom: 0,
                                    width: 350,
                                }} placeholder="Search ">


                            </TextInput>
                        </KeyboardAvoidingView>



                    </View>
                    <View style={{ flexDirection: "row", gap: 13, marginBottom: 300 }}>
                        {/*Card*/}
                        <View style={{ flex: 1, marginBottom: 20 }}>
                            

                            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                                discount={12}
                                brand="Sprite"
                                title='SPRITE green coke'
                                availability='In Stock'
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                            />

                            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                                discount={12}
                                brand="Sprite"
                                title='SPRITE green coke'
                                availability='Out of Stock'
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                            />

                            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                                discount={12}
                                brand="Sprite"
                                title='SPRITE green coke'
                                availability='In Stock'
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                            />

                            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                                discount={12}
                                brand="Sprite"
                                title='SPRITE green coke'
                                availability='In Stock'
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            />

                            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
                                discount={12}
                                brand="Sprite"
                                title='SPRITE green coke'
                                availability='Out of Stock'
                                price={130}
                                imageUrl="https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80"
                            />


                        </View>

                    </View>


                </SafeAreaView>



            </ScrollView>
        </View>
    )
}

export default WishlistScreen


const Card = ({ availability, brand, discount, price, imageUrl, title, onPress }: { availability: string, brand: string, discount: number, price: number; imageUrl: string; title: string, onPress?: () => void }) => {
    const { colors } = useTheme();
    const [count, setCount] = useState(1);
    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container}>
                <View style={{ margin: 4 }}>
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



                    <Text style={styles.price}>LKR {price}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
                        <Text style={styles.discountHead}>{availability}</Text>
                    </View>

                </View>




                <View style={{ flexDirection: "row", gap: 18 }}>

                    <TouchableOpacity
                        style={{
                            width: 35,
                            aspectRatio: 1,
                            alignItems: 'center',
                            justifyContent: "center",
                            borderRadius: 14,
                            backgroundColor: "#d82121",

                        }}>



                        <Icons name='close' color={colors.background} size={20} />

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

        backgroundColor: "#f1f1f1",
        marginBottom: 3,
        borderRadius: 10,
        padding: 9,
        elevation: 2, // Add shadow (Android)
        shadowColor: '#000', // Add shadow (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow (iOS)
        shadowOpacity: 0.1, // Add shadow (iOS)
        shadowRadius: 2, // Add shadow (iOS)
        margin: 11,
        borderColor: "#000"
    },
    image: {
        height: 100,
        width: 75,
        borderRadius: 8,
        marginRight: 12

    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 1,
        color: "black"


    },
    price: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: "600",
        color: '#777',
    },
    brand: {
        fontSize: 13,
        color: '#777',
        marginTop: 2

    },

    discount: {
        fontSize: 13,
        color: '#32cd32',
        marginTop: 4,
        marginLeft: 82,
        fontWeight: "600",

    },
    discountHead: {
        fontSize: 13,
        color: '#32cd32',
        marginTop: 4,

        fontWeight: "400",

    },

});