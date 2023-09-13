import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, TextInput, StatusBar } from 'react-native'
import { TabsStackScreenProps } from '../navigators/TabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";
import { BlurView } from 'expo-blur';


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





const CartScreen = ({ navigation }: TabsStackScreenProps<"Cart">) => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mainCategory, setMainCategory] = useState(0);

  return (




   <View>
        <View
          style={{
            marginTop:50,
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
              }}>Cart</Text>
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
            <Icons name='favorite' size={24} color={colors.text} />

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
        <View style={{ flexDirection: "row", gap: 13 }}>
          {/*Card*/}
          <View style={{ flex: 1, marginBottom: 20 }}>





           
            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              discount={12}
              brand="Sprite"
              title='SPRITE green coke'
              price={130}
              imageUrl="https://images.unsplash.com/photo-1690988109041-458628590a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            />
            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              discount={12}
              brand="Sprite"
              title='SPRITE green coke'
              price={130}
              imageUrl="https://images.unsplash.com/photo-1690988109041-458628590a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            />
            <Card onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              discount={12}
              brand="Sprite"
              title='SPRITE green coke'
              price={130}
              imageUrl="https://images.unsplash.com/photo-1690988109041-458628590a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            />
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={{ flexDirection: 'row', paddingHorizontal: 30, marginTop: 50 }}>
                <KeyboardAvoidingView>
                  <TextInput
                    style={{
                      flex: 1,
                      height: 60,
                      borderRadius: 12,
                      borderWidth: 1,
                      fontSize: 13,
                      borderColor: colors.border,
                      alignItems: "center",
                      paddingHorizontal: 24,
                      flexDirection: "row",
                      width: 350,
                    }} placeholder="Promo Code ">
                  </TextInput>
                </KeyboardAvoidingView>




              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>

                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    height: 44,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 12,
                    flexDirection: "row",
                    padding: 9,
                    width: 90,
                    margin: 1,
                    marginBottom: 100,

                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: colors.background
                    }}>
                    add
                  </Text>

                </TouchableOpacity>



              </View>
              <View style={{ gap: 12 }}>

                <View style={{ marginLeft: 40, flexDirection: "row", alignItems: 'center' }}>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color: colors.text }}>Sub Total</Text>
                    <Text style={{ marginLeft: 30, margin: 2, flex: 1, fontSize: 18, color: colors.text }}>LKR 12,000,00.00</Text>
                  </View>

                </View>
                <View style={{ marginTop: 20, marginLeft: 40, flexDirection: "row", alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 15, fontWeight: '500', color: colors.text }}>Shipping Cost</Text>
                    <Text style={{ marginLeft: 125, margin: 2, flex: 1, fontSize: 18, color: colors.text }}>LKR 400.00</Text>
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

                <View style={{ marginTop: 20, marginLeft: 40, flexDirection: "row", alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 18, fontWeight: '600', color: colors.text }}>Grand Total</Text>
                    <Text style={{ marginLeft: 3,opacity:0.75, margin: 4, flex: 1, fontSize: 27, color: colors.text ,fontWeight: '600'}}>LKR 4000000.00</Text>
                  </View>

                </View>
              </View>


              <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>

                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    height: 64,
                    borderRadius: 22,
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
                    Proceed to checkout
                  </Text>

                </TouchableOpacity>

              </View>


            </View>

          </View>

        </View>


      </SafeAreaView>



    </ScrollView>
    </View>




  );
};

export default CartScreen


const Card = ({ brand, discount, price, imageUrl, title, onPress }: { brand: string, discount: number, price: number; imageUrl: string; title: string, onPress?: () => void }) => {
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
            <Text style={styles.discountHead}>Discount</Text><Text style={styles.discount}>{discount}%</Text>
          </View>

        </View>




        <View style={{ flexDirection: "row", gap: 18 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: 'center',
              gap: 4,
              backgroundColor: colors.primary,
              padding: 6,
              borderRadius: 100,

            }}>
            <TouchableOpacity
              onPress={() => setCount(count => Math.max(1, count - 1))}
              style={{
                backgroundColor: colors.card,
                width: 30,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}>
              <Icons name='remove' size={20} color={colors.text} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.background }}>{count}</Text>
            <TouchableOpacity
              onPress={() => setCount(count => Math.min(10, count + 1))}
              style={{
                backgroundColor: colors.card,
                width: 30,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}>
              <Icons name='add' size={20} color={colors.text} />
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            style={{
              width: 45,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: 52,
              backgroundColor: "#d82121",

            }}>



            <Icons name='delete' color={colors.background} size={20} />

          </TouchableOpacity>
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

    
    marginBottom: 3,
    borderRadius: 10,
    padding: 9,
    elevation: 2, // Add shadow (Android)
    shadowColor: '#000', // Add shadow (iOS)
    shadowOffset: { width: 0, height: 2 }, // Add shadow (iOS)
   
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
    fontSize: 18,
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
    marginTop: 13,
    marginLeft: 82,
    fontWeight: "600",

  },
  discountHead: {
    fontSize: 13,
    color: '#32cd32',
    marginTop: 13,

    fontWeight: "400",

  },

});