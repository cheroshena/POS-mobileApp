import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import Icons from "@expo/vector-icons/MaterialIcons";
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import ChangePasswordView from '../components/ChangePasswordView'
import BackDropPassword from '../components/BackDropPassword'
import EditAddressView from '../components/EditAddressView'
import BackDropEditAddress from '../components/BackDropEditAddress'
import CartScreen from './CartScreen'



const OrderDetailsScreen = ({ navigation, route: { params: { id } } }: RootStackScreenProps<"OrderDetails">) => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openEditeAddressModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (

    <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
      <View style={{ paddingHorizontal: 24, flexDirection: "row", alignItems: "center", gap: 8 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 52,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 52,
            borderWidth: 1,
            borderColor: colors.border,
          }}>
          <Icons name='arrow-back' size={24} color={colors.text} />

        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 2, color: colors.text }}
            numberOfLines={1}>Order Details</Text>
          <Text style={{ fontSize: 15, marginBottom: 2, color: colors.text, opacity: 0.75 }}
            numberOfLines={1}>fwpcheroshena@gmail.com</Text>
        </View>


      </View>
      <ScrollView  >
        <View style={{ marginTop: 2, paddingHorizontal: 24, flexDirection: "column" }}>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, marginTop: 10, color: colors.text }}
              numberOfLines={1}>Order ID</Text>
            <Text style={{ fontSize: 13, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>97462DD23G400VC23MB</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, marginTop: 20, color: colors.text }}
              numberOfLines={1}>Order Items</Text>


            <Card
              
              onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              quantity={4}
              brand="Addidas"
              title="Incooler Water Bottle"
              price={2250}
              imageUrl="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              quantity={1}
              title="Day Perfume"
              brand="Marc Jacobs"
              price={13000}
              imageUrl="https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={openEditeAddressModal}>
              <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 280, marginTop: 35, color: colors.text }}
                numberOfLines={1}>Edit Address </Text></TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, opacity: 0.75, color: colors.text }}
              numberOfLines={1}>Address</Text>
            <Text style={{ fontSize: 12, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>No.194/2 Rukkaththanagaha Road,Nainamadama,Wennappuwa</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, marginTop: 20, opacity: 0.75, color: colors.text }}
              numberOfLines={1}>Mobile Number</Text>
            <Text style={{ fontSize: 12, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>0762690404</Text>

          </View>
          <View style={{ marginTop: 2, flexDirection: "row", gap: 100 }}>
            <View style={{ marginTop: 2, flexDirection: "column" }}>
              <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, marginTop: 20, opacity: 0.75, color: colors.text }}
                numberOfLines={1}>Province</Text>
              <Text style={{ fontSize: 12, marginBottom: 2, color: colors.text, opacity: 0.75 }}
                numberOfLines={1}>North-Western</Text>
            </View>
            <View style={{ marginTop: 2, flexDirection: "column", marginBottom: 50 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 2, marginTop: 20, opacity: 0.75, color: colors.text }}
                numberOfLines={1}>State</Text>
              <Text style={{ fontSize: 12, marginBottom: 2, color: colors.text, opacity: 0.75 }}
                numberOfLines={1}>Wennappuwa</Text>
            </View>

          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.border,
              position: 'relative',

            }}
          >
          </View>
          <View style={{ gap: 12, marginTop: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: colors.text }}
              numberOfLines={1}>Order Summary </Text>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>


              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color: colors.text }}>Sub Total</Text>
                <Text style={{ marginLeft: 60, margin: 2, flex: 1, fontSize: 18, color: colors.text }}>LKR {(15250).toLocaleString()}</Text>
              </View>

            </View>
            <View style={{ marginTop: 20, flexDirection: "row", alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color: colors.text }}>Shipping Cost</Text>
                <Text style={{ marginLeft: 60, margin: 2, flex: 1, fontSize: 18, color: colors.text }}>LKR {(200).toLocaleString()}</Text>
              </View>

            </View>
            <View
              style={{
                paddingHorizontal: 24
              }}>

              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: colors.border,
                  position: 'relative'
                }}
              >
              </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: "row", alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1, fontSize: 18, fontWeight: '600', color: colors.text }}>Grand Total</Text>
                <Text style={{ marginLeft: 3, opacity: 0.75, margin: 4, flex: 1, fontSize: 27, color: colors.text, fontWeight: '600' }}>LKR {(15450).toLocaleString()}</Text>
              </View>

            </View>

          </View>
          <View style={{ flexDirection: "column", marginTop: 70, alignItems: "center" }}>

            <TouchableOpacity onPress={() => { navigation.navigate("OrderMethod", { id: "123" }); }}
              style={{
                backgroundColor: colors.primary,
                height: 64,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                position: "relative",
                flexDirection: "row",
                padding: 9,
                width: 240,
                margin: 2,
                marginBottom: 300,

              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: colors.background
                }}>
                Checkout
              </Text>

            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
      <BottomSheetModal
        snapPoints={['70%']}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <BackDropEditAddress{...props} />}
      >
        <EditAddressView />
      </BottomSheetModal>
    </SafeAreaView>


  )
}

export default OrderDetailsScreen

const Card = ({ brand, quantity, price, imageUrl, title, onPress }: { brand: string, quantity: number, price: number; imageUrl: string; title: string, onPress?: () => void}) => {
  const { colors } = useTheme();


  return (
    <TouchableOpacity onPress={onPress}>

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
      <View
        style={{
          paddingHorizontal: 24
        }}>

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: colors.border,
            position: 'relative'
          }}
        >
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
    marginLeft:90
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