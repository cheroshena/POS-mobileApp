import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from "@expo/vector-icons/MaterialIcons";
import PriceRangeSelector from './PriceRangeSelector';

const MAX_PRICE = 500;

const BRAND = [
    {
        id: 'Hemas',
        label: 'Hemas',
        itemCount: 96
    },
    {
        id: 'Clogard',
        label: 'Clogard',
        itemCount: 43
    },
    {
        id: 'Lifebouy',
        label: 'Lifebouy',
        itemCount: 17
    },
    {
        id: 'Healthshild',
        label: 'Health Shild',
        itemCount: 39
    },
]

const SUBCATEGORY = [
    {
        id: 'fruits ',
        label: 'Fruits',
        itemCount: 106
    },
    {
        id: 'vegetables',
        label: 'Vegetables',
        itemCount: 242
    },
    {
        id: 'health',
        label: 'Health',
        itemCount: 133
    },
    {
        id: 'snacks',
        label: 'Snacks',
        itemCount: 89
    },
    {
        id: 'homeandkitchen',
        label: 'Home & Kitchen',
        itemCount: 64
    },
    {
        id: 'pantry',
        label: 'Pantry',
        itemCount: 35
    },
    {
        id: 'snacks',
        label: 'Snacks',
        itemCount: 89
    },
]

const LOCATION = [
    {
        id: 'wennappuwa ',
        label: 'Wennappuwa',

    },
    {
        id: 'bandaradama',
        label: 'Bandaradama',

    },
    {
        id: 'pitipana',
        label: 'Pitipana',

    },
    {
        id: 'kirulapana',
        label: 'Kirulupana',

    },
    {
        id: 'jaela',
        label: 'Ja-ela',

    }
]

const FilterView = () => {
    const { colors } = useTheme();
    const [startPrice, setStartPrice] = useState(50);
    const [endPrice, setEndPrice] = useState(250);
    const theme = useTheme()
    const insets = useSafeAreaInsets();
    const [category, setCategory] = useState(SUBCATEGORY[0]);
    const [mainCategory, setMainCategory] = useState(0);
    const [brand, setBrand] = useState(BRAND[0])
    const [location, setLocation] = useState(LOCATION[0])
    return (
        <View
            style={{
                flex: 1
            }}>
            <ScrollView style={{
                flex: 1
            }}>
                <View style={{ paddingVertical: 24, gap: 24 }}>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24 }}>
                        <Text style={{ flex: 1, fontSize: 21, fontWeight: "700" }}>Filters</Text>
                        <TouchableOpacity>
                            <Text style={{ flex: 1, fontSize: 15, paddingTop: 10, fontWeight: "500" }}>Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <PriceRangeSelector minPrice={0} maxPrice={MAX_PRICE} startPrice={startPrice} endPrice={endPrice} onStartPriceChange={setStartPrice} onEndPriceChange={setEndPrice} />
                    {/*Location*/}
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 16
                        }}>
                            Location
                        </Text>
                        {/* Sub category items main category or sub category */}
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                            {LOCATION.map((s, i) => <TouchableOpacity key={i} onPress={() => setLocation(s)}
                                style={{
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    borderRadius: 100,
                                    backgroundColor: s === location ? colors.primary : colors.background,

                                }}>
                                <Text style={{
                                    color: s === location ? "#fff" : colors.text,
                                    fontSize: 14,
                                    fontWeight: "600",

                                }}>{s.label}</Text>
                            </TouchableOpacity>)}
                        </View>
                    </View>
                    {/*Main location*/}
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 16
                        }}>
                            Category
                        </Text>
                        {/* Sub category items main category or sub category */}
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                            {SUBCATEGORY.map((s, i) => <TouchableOpacity key={i} onPress={() => setCategory(s)}
                                style={{
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    borderRadius: 100,
                                    backgroundColor: s === category ? colors.primary : colors.background,

                                }}>
                                <Text style={{
                                    color: s === category ? "#fff" : colors.text,
                                    fontSize: 14,
                                    fontWeight: "600",

                                }}>{s.label}[{s.itemCount}]</Text>
                            </TouchableOpacity>)}
                        </View>
                    </View>
                    {/*brands*/}
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 16
                        }}>
                            Brands
                        </Text>
                        {/* Sub category items main category or sub category */}
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                            {BRAND.map((s, i) => <TouchableOpacity key={i} onPress={() => setBrand(s)}
                                style={{
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    borderRadius: 100,
                                    backgroundColor: s === brand ? colors.primary : colors.background,

                                }}>
                                <Text style={{
                                    color: s === brand ? "#fff" : colors.text,
                                    fontSize: 14,
                                    fontWeight: "600",

                                }}>{s.id}[{s.itemCount}]</Text>
                            </TouchableOpacity>)}
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/*Buttons*/}

            <View style={{ padding: 24, paddingBottom: 24 + insets.bottom, }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: theme.colors.primary,
                        height: 64,
                        borderRadius: 64,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "relative"

                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: theme.colors.background
                        }}>
                        Apply Filters
                    </Text>
                    <View
                        style={{
                            backgroundColor: theme.colors.card,
                            width: 40, aspectRatio: 1,
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: "center",
                            position: "absolute",
                            top: 12,
                            right: 12,
                            bottom: 12
                        }} >
                        <Icons name="arrow-forward" size={24} color={theme.colors.text} />
                    </View>
                </TouchableOpacity>
            </View>



        </View>
    );
};

export default FilterView;



const Chip = ({ isSelected, label, itemCount }: { isSelected: boolean, label: string, itemCount: number }) => {
    const theme = useTheme()
    return (
        <View

            style={{

                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 100,
                backgroundColor: isSelected ? theme.colors.text : theme.colors.background,
            }}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: isSelected ? theme.colors.background : theme.colors.text,
                }}>
                {label} [{itemCount}]
            </Text>
        </View>
    )
}