import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { useNavigation, useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const FeedbackRatingScreen = ({
  navigation,
  route: { params: { id } } }: RootStackScreenProps<"Feedback">) => {
  const { colors } = useTheme();
  return (

    <View style={{ padding: 12, marginTop: 55 }}>

      <SafeAreaView style={{ paddingVertical: 22, gap: 1 }}>

        {/*Header Section*/}
        <View style={{ marginTop: 15, paddingHorizontal: 12, flexDirection: "row", alignItems: "center", gap: 12 }}>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 2, color: colors.text }}
              numberOfLines={1}>Feedback & Ratings</Text>
            <Text style={{ fontSize: 13, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>fwpcheroshena@gmail.com</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 70,
              height: 42,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.border
            }}>
            <Text style={{ fontWeight: "600", fontSize: 12, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>Back</Text>
          </TouchableOpacity>

        </View>
        <ScrollView>
          <View style={{ flex: 1, marginBottom: 500 }}>



            <Card
              location="Wennappuwa"
              orderId="41VM7772BXUQFD20123LN"
              orderStatus="Completed"
              orderStatusClr="#2fbd00"
              onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              onPresss={() => { navigation.navigate("Feedback", { id: "123", }); }}
              stock={13}
              brand="Addidas"
              title="Incooler Water Bottle "
              price={2000}
              rating={3.5}
              imageUrl="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />
            <Card
              location="Wennappuwa"
              orderId="41VM7772BXUQFD20123LN"
              orderStatus="Completed"
              orderStatusClr="#2fbd00"
              onPress={() => { navigation.navigate("Details", { id: "123", }); }}
              onPresss={() => { navigation.navigate("Feedback", { id: "123", }); }}
              stock={13}
              brand="Addidas"
              title="Incooler Water Bottle "
              price={2000}
              rating={3.5}
              imageUrl="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            />


          </View>
        </ScrollView>
      </SafeAreaView>

    </View >
  )
}

export default FeedbackRatingScreen

const Card = ({ location, rating, orderId, orderStatusClr, orderStatus, brand, stock, price, imageUrl, title, onPress, onPresss }: { location: string, rating: number, orderId: string, orderStatusClr: string, orderStatus: string, brand: string, stock: number, price: number; imageUrl: string; title: string, onPresss?: () => void, onPress?: () => void }) => {
  const { colors } = useTheme();
  const feedbackNavigation = useNavigation();


  return (
    <View>
      <TouchableOpacity onPress={onPress}>


        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 2, marginTop: 40, color: colors.text }}
            numberOfLines={1}>{title}</Text>
          <Text style={{ fontSize: 10, marginBottom: 2, color: colors.text, opacity: 0.75 }}
            numberOfLines={1}>{brand}</Text>
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
            <Text style={styles.title} numberOfLines={1}>Location :{location}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
              <Text style={styles.brand}>Ratings </Text><Text style={styles.brand}>{rating}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
              <Text style={styles.discountHead}>Instock</Text><Text style={styles.stock}>{stock}</Text>

            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
              <Text style={styles.discountHead}>Price </Text><Text style={styles.stock}>LKR {(price).toLocaleString()}</Text>

            </View>
          </View>
        </View>


      </TouchableOpacity>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center", gap: 4 }}>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: colors.text, marginTop: 8 }}>Ratings & Review</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', gap: 8, marginTop: 1 }}>
            <View style={{ flex: 1 }}>
              {/* Rating Star */}
              <View style={{ flexDirection: "row", gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 0 ? "star" : "star-border"}
                    color="#facc15"
                    size={30}
                  />
                ))}
              </View>

            </View>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 19 }}>
            <Text style={{ marginTop: 15, flex: 1, fontSize: 16, fontWeight: "600", color: colors.text }}>Comment</Text>
          </View>
          <View style={{ flex: 1 }}>

            <KeyboardAvoidingView

              style={{
                marginTop: 4,
                height: 64,
                borderRadius: 64,
                alignItems: 'center',
                marginBottom: 30,
              }}
            >


              <TextInput
                multiline
                numberOfLines={5}
                maxLength={300}

                style={{
                  borderRadius: 14,
                  backgroundColor: "#fff",
                  marginBottom: 0,
                  borderWidth: 1,
                  borderColor: "#dcdcdc",
                  padding: 15,
                  height: 90,
                  width: 350,
                }}
                placeholder="Enter your comment"
              />

            </KeyboardAvoidingView>
          </View>
          <View style={{ flexDirection: "column", flexWrap: "wrap", alignItems: "center", gap: 16, }}>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                height: 64,
                borderRadius: 64,
                alignItems: 'center',
                justifyContent: 'center',
                position: "relative",
                flexDirection: "row",
                padding: 9,
                width: 120,
                margin: 2,
                marginBottom: 20,

              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: colors.background,

                }}>
                Submit
              </Text>


            </TouchableOpacity>

          </View>

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
      </View>

    </View>

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
    height: 145,
    width: 90,
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

  stock: {
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