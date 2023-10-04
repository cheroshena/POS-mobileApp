import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React, { useCallback, useRef } from 'react'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import FilterView from '../components/FilterView';
import BackDropSetting from '../components/BackDropSetting';
import SettingView from '../components/SettingView';
import BackDropPassword from '../components/BackDropPassword';
import ChangePasswordView from '../components/ChangePasswordView';
import { RootStackScreenProps } from '../navigators/RootNavigator';
import { TabsStackScreenProps } from '../navigators/TabsNavigator';


const AVATAR_URL = "https://cdn-icons-png.flaticon.com/512/3059/3059518.png";

const UserProfileScreen = ({ navigation }: TabsStackScreenProps<"Profile">) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const bottomSheetModalReff = useRef<BottomSheetModal>(null);
    

    const openSettingModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const openPasswordModal = useCallback(() => {
        bottomSheetModalReff.current?.present();
    }, []);
    const { colors } = useTheme();

    return (
        <View style={{ padding: 12 }} >
            <ScrollView>
                <SafeAreaView style={{ paddingVertical: 22, gap: 1 }}>

                    {/*Header Section*/}
                    <View style={{ marginTop: 29, paddingHorizontal: 12, flexDirection: "row", alignItems: "center", gap: 12 }}>
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
                            onPress={openSettingModal}
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
                    <View
                        style={{ marginTop: 1, padding: 16 }}>
                        <Text
                            style={{
                                marginTop: 40,
                                fontSize: 24,
                                fontWeight: '700',
                                color: colors.text,
                            }}>Profile
                        </Text>

                    </View>
                    <View
                        style={{ marginTop: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Icons name='person' color={colors.text} style={{ opacity: 0.7 }} size={25} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 16, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>User Name </Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 12 }}>
                            <Text style={{ flex: 1, fontWeight: "400", fontSize: 14, color: colors.text, opacity: 0.5, marginTop: -6 }}>Cheroshena Fernando</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Icons name='mail' color={colors.text} style={{ opacity: 0.7 }} size={25} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 16, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>E-mail Address </Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 12 }}>
                            <Text style={{ flex: 1, fontWeight: "400", fontSize: 14, color: colors.text, opacity: 0.5, marginTop: -6 }}>fwpcheroshena@gamil.com</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Icons name='explore' color={colors.text} style={{ opacity: 0.7 }} size={25} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 16, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>Province </Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 12 }}>
                            <Text style={{ flex: 1, fontWeight: "400", fontSize: 14, color: colors.text, opacity: 0.5, marginTop: -6 }}>North-Western Province</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Icons name='location-on' color={colors.text} style={{ opacity: 0.7 }} size={25} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 16, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>Location </Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 12 }}>
                            <Text style={{ flex: 1, fontWeight: "400", fontSize: 14, color: colors.text, opacity: 0.5, marginTop: -6 }}>No.194/2, Rukkaththana gaha Road,Nainamadama.</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Icons name='call' color={colors.text} style={{ opacity: 0.7 }} size={25} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 16, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>Phone Number </Text>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 12 }}>
                            <Text style={{ flex: 1, fontWeight: "400", fontSize: 14, color: colors.text, opacity: 0.5, marginTop: -6 }}>0094762690404</Text>
                        </View>


                    </View>
                    <View style={{ marginTop: 60, padding: 12 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("OrderHistory", { id: "123" }); }}>
                            <View style={{ flexDirection: "row"}}>
                                <Icons name='list-alt' color={colors.text} style={{ opacity: 0.7 }} size={22}  marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 14, color: colors.text, opacity: 0.7,marginTop: 3, marginHorizontal: 2 }}>Your Orders </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={openPasswordModal}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Icons name='lock' color={colors.text} style={{ opacity: 0.7 }} size={20} marginTop={13} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 14, color: colors.text, opacity: 0.7, marginTop: 17, marginHorizontal: 2 }}>Change Password </Text>
                            </View>

                        </TouchableOpacity>
                    </View>


                </SafeAreaView>
                <BottomSheetModal
                    snapPoints={['70%']}
                    index={0}
                    ref={bottomSheetModalReff}
                    backdropComponent={(props) => <BackDropPassword{...props} />}
                >
                    <ChangePasswordView />
                </BottomSheetModal>
                <BottomSheetModal
                    snapPoints={['80%']}
                    index={0}
                    ref={bottomSheetModalRef}
                    backdropComponent={(props) => <BackDropSetting{...props} />}
                >
                    <SettingView />
                </BottomSheetModal>
            </ScrollView>
        </View>
    )
}

export default UserProfileScreen