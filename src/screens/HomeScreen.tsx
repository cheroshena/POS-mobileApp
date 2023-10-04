import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import MasonryList from 'reanimated-masonry-list';
import { BlurView } from 'expo-blur';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../components/CustomBackdrop';
import FilterView from '../components/FilterView';
import { TabsStackScreenProps } from '../navigators/TabsNavigator';

const CATEGORIES = [
  "xwqwq",
  "vvvqwqwq",
  "eeee",
  "xxxqfefeefx",
  "vvvwef3",
  "efwf",
  "xxxefwfe2efex",
]

const MESONARY_LIST_DATA = [
  {
    imageUrl: "https://images.unsplash.com/photo-1690988109041-458628590a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    title: "Sprite 100ml",
    brand: "Sprite",
    price: 4330,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    title: "Day Perfume",
    brand: "Marc Jacobs",
    price: 25000,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Mouse & KeyBoard",
    brand: "Logi",
    price: 7400,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618354691249-18772bbac3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Incooler Water Bottle",
    brand: "Addidas",
    price: 1500,
  },


  {
    imageUrl:
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80",
    title: "IPhone 12 Pro Max",
    brand: "Apple",
    price: 350000,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    title: "Unicorn Socks",
    brand: "Nike",
    price: 1200,
  },
]


const MAINCATEGORY = [
  <Text><Icons name='bolt' size={32} />{'\n'}Electronic
  </Text>,
  <Text><MaterialCommunityIcons name="medical-bag" size={32} />{'\n'}Pharmacy
  </Text>,
  <Text><MaterialCommunityIcons name="teddy-bear" size={32} />{'\n'}Toys
  </Text>,
  <Text><Fontisto name="shopping-bag-1" size={32} />{'\n'}Grocery
  </Text>,
  <Text><Ionicons name="fast-food" size={32} />{'\n'}Foods and Beverages
  </Text>,

]

const AVATAR_URL = "https://cdn-icons-png.flaticon.com/512/3059/3059518.png";

const HomeScreen = ({ navigation }: TabsStackScreenProps<"Home">) => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mainCategory, setMainCategory] = useState(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);


  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/*Header Section*/}
        <TouchableOpacity onPress={() => {
                            navigation.navigate("TabsStack", { screen: "Profile" });
                          }}> 
        <View style={{ paddingHorizontal: 24, flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image source={{
            uri: AVATAR_URL,
          }} style={{ width: 40, aspectRatio: 1, borderRadius: 40 }} resizeMode='cover' />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 2, color: colors.text }}
              numberOfLines={1}>Hey! Cheroshena </Text>
            <Text style={{ fontSize: 10, marginBottom: 2, color: colors.text, opacity: 0.75 }}
              numberOfLines={1}>Choose your Own Choice</Text>
          </View>
          <TouchableOpacity
           onPress={() => {
            navigation.navigate("TabsStack", { screen: "Wishlist" });
          }}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            <Icons name='favorite' size={24} color={colors.primary} />

          </TouchableOpacity>
        </View>
        </TouchableOpacity>

        {/*Search Section*/}
        <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity style={{
            flex: 1,
            height: 52,
            borderRadius: 52,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            paddingHorizontal: 24,
            flexDirection: "row",
            gap: 12,
          }}>
            <Icons name='search' size={24} color={colors.text} style={{ opacity: 0.5 }} />
            <Text style={{ flex: 1, fontSize: 15, color: colors.text, opacity: 0.5 }}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openFilterModal}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: 52,
              backgroundColor: colors.primary,
            }}>
            <Icons name='tune' size={24} color={colors.background} />

          </TouchableOpacity>

        </View>
        
        {/*Main Category*/}
        <FlatList
          data={MAINCATEGORY}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 9,

          }}
          renderItem={({ item, index }) => {
            const isSelected = mainCategory === index;
            return (
              <TouchableOpacity onPress={() => setMainCategory(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 18,
                  paddingVertical: 12,
                  borderRadius: 30,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,

                }}>
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: '600',
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                    textAlign: 'center',
                  }}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
        {/*Grid Collections View*/}
        <View style={{ paddingHorizontal: 24 }}>
          {/*Title bar*/}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>New Products</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            {/*Card*/}
            <View
              style={{
                flex: 1,
              }}
            >
              <Card
                onPress={() => {
                  navigation.navigate("Details", {
                    id: "123",
                  });
                }}
                title='Face wash'
                price={13300}
                imageUrl="https://images.unsplash.com/photo-1605091862660-a8d1d770dfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card
                onPress={() => {
                  navigation.navigate("Details", {
                    id: "456",
                  });
                }}
                title='Vitamins'
                price={5400}
                imageUrl="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
              <Card
                title='Water Bottle'
                price={1250}
                imageUrl="https://images.unsplash.com/photo-1619021016992-07909c5b85d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />
            </View>
          </View>
        </View>
        {/*Categories*/}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 9
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 30,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,

                }}>
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: '600',
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                  }}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
        {/*ProList*/}


        {/* MasonryList */}
        <MasonryList
          data={MESONARY_LIST_DATA}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }: any) => (
            <View style={{ padding: 6 }}>
              <TouchableOpacity
                style={{
                  aspectRatio: i === 0 ? 1 : 2 / 3,
                  position: 'relative',
                  overflow: "hidden",
                  backgroundColor: "white",
                  marginTop: 10,
                  borderRadius: 24,


                }}
              >
                <Image
                  source={{
                    uri: item.imageUrl,
                  }}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                />
                <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
                  <View style={{ flexDirection: 'row', gap: 8, padding: 4 }}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 18,
                        fontWeight: "800",
                        color: colors.text
                      }}>{item.title}{'\n'}
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 9,
                          fontWeight: "500",
                          color: colors.text
                        }}>
                        {item.brand}
                      </Text>
                    </Text>


                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.background,
                        borderRadius: 100,
                        height: 42,
                        aspectRatio: 1,
                        alignItems: "center",
                        justifyContent: "center"
                      }}>




                      <Icons name='favorite-border' size={20} color={colors.primary} />

                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }} />
                  <BlurView
                    style={{
                      flexDirection: 'row',
                      backgroundColor: "rgba(0,0,0,0.35)",
                      alignItems: "center",
                      padding: 8,
                      borderRadius: 25,
                      overflow: "hidden",

                    }}
                    intensity={20}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#ffff",
                        marginLeft: 4
                      }}
                      numberOfLines={1}>LKR {(item.price).toLocaleString()}</Text>
                    <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 100, backgroundColor: "#fff" }}><Icons name='add-shopping-cart' size={20} color={"#21367F"} /></TouchableOpacity>

                  </BlurView>
                </View>
              </TouchableOpacity>
            </View>

          )}
          onEndReachedThreshold={0.1}


        />


      </SafeAreaView>
      <BottomSheetModal
        snapPoints={['75%']}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <CustomBackdrop{...props} />}
      >
        <FilterView />
      </BottomSheetModal>
    </ScrollView>
  );
};

export default HomeScreen

const Card = ({ price, imageUrl, title, onPress }: { price: number; imageUrl: string; title: string, onPress?: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: 'relative',
        overflow: "hidden",
        borderRadius: 24,

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
      <View style={{
        position: "absolute",
        left: 16,
        top: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "rgba(0,0,0,0.42)",
        borderRadius: 15,
      }}>
        <Text style={{ fontSize: 10, fontWeight: '500', color: '#fff' }}>
          {title}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>
        LKR {(price).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}


const PCard = ({ brand, price, imageUrl, title, onPress }: { brand: string; price: number; imageUrl: string; title: string, onPress?: () => void }) => {
  return (

    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: 'relative',
        overflow: "hidden",
        borderRadius: 24,
        backgroundColor: "white",



      }}
    >
      <Image
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}



      />
      <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
        <View style={{ flexDirection: 'row', gap: 8, padding: 4 }}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontWeight: "800",
              color: "#080808"
            }}>{title}{'\n'}
            <Text
              style={{
                flex: 1,
                fontSize: 9,
                fontWeight: "500",
                // color: colors.text
              }}>
              {brand}
            </Text>
          </Text>


          <TouchableOpacity
            style={{
              backgroundColor: "#ffff",
              borderRadius: 100,
              height: 42,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center"
            }}>




            <Icons name='favorite-border' size={20} />

          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
        <BlurView
          style={{
            flexDirection: 'row',
            backgroundColor: "rgba(0,0,0,0.35)",
            alignItems: "center",
            padding: 8,
            borderRadius: 25,
            overflow: "hidden",

          }}
          intensity={20}>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: "500",
              color: "#ffff",
              marginLeft: 4
            }}
            numberOfLines={1}>LKR{price}</Text>
          <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 100, backgroundColor: "#fff" }}><Icons name='add-shopping-cart' size={20} color={"#000"} /></TouchableOpacity>

        </BlurView>
      </View>
    </TouchableOpacity>
  )
}