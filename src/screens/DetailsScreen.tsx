import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SlideInDown } from 'react-native-reanimated';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';



const IMAGE = [
  {
    imageUrl: "https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595002032567-42217542ef95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyYyUyMGphY29ic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581954725297-64f25ea4dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595002133067-9bdda274dbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595002032567-42217542ef95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyYyUyMGphY29ic3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581954725297-64f25ea4dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",

  },
  {
    imageUrl: "https://images.unsplash.com/photo-1595002133067-9bdda274dbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",

  }
]

const ML_SIZES = ["15ml", "25ml", "30ml", "60ml", "100ml"];
const KG_SIZES = ["50g", "100g", "250g", "500g", "1kg"];

const DetailsScreen = ({
  navigation,
  route: { params: { id } } }: RootStackScreenProps<"Details">) => {
  const { colors } = useTheme();
  const [imageCollection, setImageCollection] = useState(0);
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [mlsizes, setMlSizes] = useState(ML_SIZES[0]);
  const [kgsizes, setKgSizes] = useState(KG_SIZES[0]);
  const [value, onChangeText] = React.useState();



  return (
    <View style={{ flex: 1 }}>


      <Image source={{
        uri: "https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
      }} style={{ flex: 1 }} />
      <SafeAreaView
        edges={["top"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0
        }}>
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: "center",
            padding: 20,
            gap: 8
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
              borderColor: "#fff",
            }}>
            <Icons name='arrow-back' size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}>
            <Icons name='favorite' size={24} color={"#fff"} />

          </TouchableOpacity>
          <TouchableOpacity

            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}>
            <Icons name='add-shopping-cart' size={24} color={"#fff"} />

          </TouchableOpacity>
        </View>
        {/*Image Pics*/}
        <FlatList
          data={IMAGE}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 9,

          }}
          renderItem={({ item, index }) => {
            const isSelected = imageCollection === index;
            return (
              <TouchableOpacity onPress={() => setImageCollection(index)}
                style={{
                  marginTop: 3,
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 22,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                  height: 148,
                  width: 80

                }}>
                <Image source={{
                  uri: item.imageUrl,
                }} style={{ height: 138, width: 70, padding: 1, borderRadius: 16 }} />

              </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
      <BottomSheet
        detached
        snapPoints={[50, 700]}
        index={0}
        style={{ marginHorizontal: 12 }}
        bottomInset={insets.bottom + 20}

        backgroundStyle={{ borderRadius: 24, backgroundColor: colors.background, }}>
        {/* Details Layout */}
        <ScrollView>
          <View
            style={{ padding: 16 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
                color: colors.text,
      }}>Mark Jacobs (Day Perfume)</Text>
            <Text
              style={{
                marginTop: 1,
                fontSize: 16,
                fontWeight: '400',
                color: colors.text,
              }}>Empiro Armani</Text>
            {/* Quantity increment & decrement*/}
            <View style={{ flexDirection: "row", alignItems: 'center', gap: 8, marginTop: 14 }}>
              <View style={{ flex: 1 }}>
                {/* Rating Star */}
                <View style={{ flexDirection: "row", gap: 2 }}>
                  {new Array(5).fill("").map((_, i) => (
                    <Icons
                      key={i}
                      name={i < 4 ? "star" : "star-border"}
                      color="#facc15"
                      size={20} />
                  ))}
                </View>
                <Text style={{ fontSize: 14, color: colors.text, opacity: 0.5, marginTop: 4 }}>
                  3.0 (250K Reviews)
                </Text>




              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: colors.primary,
                  padding: 6,
                  borderRadius: 100,

                }}>
                <TouchableOpacity
                  onPress={() => setCount(count => Math.max(1, count - 1))}
                  style={{
                    backgroundColor: colors.card,
                    width: 34,
                    aspectRatio: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 34,
                  }}>
                  <Icons name='remove' size={20} color={colors.text} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600', color: colors.background }}>{count}</Text>
                <TouchableOpacity
                  onPress={() => setCount(count => Math.min(10, count + 1))}
                  style={{
                    backgroundColor: colors.card,
                    width: 34,
                    aspectRatio: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 34,
                  }}>
                  <Icons name='add' size={20} color={colors.text} />
                </TouchableOpacity>

              </View>

            </View>
            <View style={{ flexDirection: "row" }}>
              <Icons name='location-on' color={colors.text} style={{ opacity: 0.5 }} size={18} marginTop={12} marginRight={7} /><Text style={{ fontWeight: "500", fontSize: 13, color: colors.text, opacity: 0.5, marginTop: 15, marginHorizontal: 2 }}>Bandaragama</Text>
            </View>


            <View style={{ flexDirection: "row" }}>
              <Icons name='local-shipping' color={colors.text} style={{ opacity: 0.5 }} size={18} marginTop={4} marginLeft={2} marginRight={5} /><Text style={{ fontWeight: "500", fontSize: 13, color: colors.text, opacity: 0.5, marginTop: 5, marginHorizontal: 2 }}>Delivery Charge LKR 250 </Text>
            </View>
            <Text style={{ fontWeight: "400", fontSize: 10, color: colors.text, opacity: 0.5, marginTop: 1, marginLeft: 27 }}>Aug 24 to 26</Text>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 19 }}>
                <Text style={{ marginTop: 15, flex: 1, fontSize: 16, fontWeight: "600", color: colors.text }}>Measure Category</Text>
              </View>
              <View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                  {ML_SIZES.map((s, i) => <TouchableOpacity key={i} onPress={() => setMlSizes(s)}
                    style={{
                      height: 44,
                      width: 70,
                      alignItems: 'center',
                      justifyContent: "center",
                      backgroundColor: s === mlsizes ? colors.primary : colors.card,
                      borderRadius: 44
                    }}>
                    <Text style={{
                      color: s === mlsizes ? "#fff" : colors.text,
                      fontWeight: '600',
                      fontSize: 13
                    }}>{s}</Text>
                  </TouchableOpacity>)}
                </View>
              </View>
              <View>
                <Text style={{ marginTop: 13, fontSize: 16, fontWeight: "600", marginBottom: 6, color: colors.text }}>Description</Text>
                <Text style={{ fontSize: 12, color: colors.text, opacity: 0.75 }} numberOfLines={12}>Decadence by Marc Jacobs - A
                  sensual woody fragrance for women with notes
                  of plum, iris, saffron, papyrus, and amber. Created by Annie Buzantian,
                  Decadence perfume embodies the spirit of glamour with it's emerald green
                  handbag design and silky black tassel. The ad campaign features model Adriana
                  Lima shot by photographer Steven Meisel. This opulent and luxurious scent is available
                  in an eau de parfum spray, rollerball, and matching body products from Macy's, Nordstrom,
                  and Sephora.</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginTop: 18, flex: 1, fontSize: 20, fontWeight: "600", color: "#32cd32" }}>Discount</Text>
                <Text style={{ marginTop: 17, flex: 1, fontSize: 14, fontWeight: "600", color: "#32cd32" }}>15%</Text>
              </View>
              <View style={{ flex: 1 }} />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginTop: 19, flex: 1, fontSize: 16, fontWeight: "600", color: colors.text }}>Price</Text>

              </View>
              <Text style={{ marginTop: 1, flex: 1, fontSize: 25, fontWeight: "600", color: colors.text }}>LKR 14,999.00</Text>

              <View style={{ flexDirection: 'row', alignItems: "center", gap: 16 }}>
                <View style={{ flex: 1 }}></View>
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
                    width: 180,
                    margin: 2

                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: colors.background
                    }}>
                    Add to Cart
                  </Text>

                </TouchableOpacity>

              </View>


            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 19, marginTop: 30 }}>
              <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: colors.text, marginTop: 8 }}>Feedbacks</Text>
            </View>
            {/* Users Feedbacks */}
            <View style={{ flexDirection: "column", marginBottom: 10 }}>
              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <Text style={{ fontWeight: "500", flex: 1, fontSize: 13, color: colors.text }}>Fernando Cheroshena</Text>
                <View style={{ flexDirection: "row", gap: 2, marginRight: 65 }}>
                  {new Array(5).fill("").map((_, i) => (
                    <Icons
                      key={i}
                      name={i < 5 ? "star" : "star-border"}
                      color="#facc15"
                      size={18} />
                  ))}
                </View>
              </View>
              <Text style={{ flex: 1, fontSize: 12, color: colors.text, opacity: 0.7 }}>Awesome Product !!! Thhank you </Text>


              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "500", flex: 1, fontSize: 13, color: colors.text }}>Elone Bark</Text>
                <View style={{ flexDirection: "row", gap: 2, marginRight: 65 }}>
                  {new Array(5).fill("").map((_, i) => (
                    <Icons
                      key={i}
                      name={i < 3 ? "star" : "star-border"}
                      color="#facc15"
                      size={18} />
                  ))}
                </View>
              </View>
              <Text style={{ flex: 1, fontSize: 12, color: colors.text, opacity: 0.7 }}>That's Goooood,Fast Delivery </Text>


              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "500", flex: 1, fontSize: 13, color: colors.text }}>Luis Hamilton</Text>
                <View style={{ flexDirection: "row", gap: 2, marginRight: 65 }}>
                  {new Array(5).fill("").map((_, i) => (
                    <Icons
                      key={i}
                      name={i < 4 ? "star" : "star-border"}
                      color="#facc15"
                      size={18} />
                  ))}
                </View>
              </View>
              <Text style={{ flex: 1, fontSize: 12, color: colors.text, opacity: 0.7 }}>Highly Recommended ! </Text>


            </View>

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
                    maxLength={100}

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
              <View style={{ flexDirection: "column", flexWrap: "wrap", alignItems: "center", gap: 16 }}>

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
                    marginBottom: 400,

                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: colors.background
                    }}>
                    Submit
                  </Text>

                </TouchableOpacity>

              </View>


            </View>

          </View>


        </ScrollView>
      </BottomSheet>




    </View>
  )
}

export default DetailsScreen



const ImageCard = ({ imageUrl, onPress }: { imageUrl: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: 'relative',
        overflow: "hidden",


      }}
    >
      <Image
        source={{ uri: imageUrl }}
        resizeMode='cover'
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

        }}
      />

    </TouchableOpacity>
  )
}