import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icons from "@expo/vector-icons/MaterialIcons";

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
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(250);
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

                    {/*Range Selector*/}
                    <View
                        style={{
                            paddingHorizontal: 24
                        }}>
                        <View style={{ marginBottom: 24 }}>
                            <Text>Price Range</Text>
                        </View>
                        <View
                            style={{
                                height: 1,
                                width: "100%",
                                backgroundColor: theme.colors.border,
                                position: 'relative'
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    left: `${(100 * minPrice) / MAX_PRICE}%`,
                                    width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
                                    height: "100%",
                                    backgroundColor: theme.colors.primary,
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    left: '10%',
                                    height: 24,
                                    aspectRatio: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 100,
                                    borderColor: theme.colors.primary,
                                    borderWidth: 2,
                                    transform: [
                                        {
                                            translateX: -12,
                                        },
                                        {
                                            translateY: -12
                                        }
                                    ]
                                }}>
                                <View
                                    style={{
                                        width: 3,
                                        height: 3,
                                        borderRadius: 10,
                                        backgroundColor: theme.colors.primary
                                    }}
                                />
                            </View>
                            <View style={{ position: "absolute", left: "10%" }}>
                                <SliderHandle />
                            </View>
                            <View style={{ position: "absolute", left: "50%" }}>
                                <SliderHandle />
                            </View>

                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: "space-between",
                                marginTop: 12
                            }}
                        >
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    opacity: 0.4
                                }}>
                                LKR0
                            </Text>
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    opacity: 0.4
                                }}>
                                LKR{MAX_PRICE}
                            </Text>
                        </View>
                    </View>
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

const SliderHandle = () => {
    const theme = useTheme()
    return (
        <View
            style={{
                height: 24,
                aspectRatio: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                borderColor: theme.colors.primary,
                borderWidth: 2,
                backgroundColor: theme.colors.primary,
                transform: [
                    {
                        translateX: -12,
                    },
                    {
                        translateY: -12,
                    },
                ]
            }}>
            <View
                style={{
                    width: 3,
                    height: 3,
                    borderRadius: 10,
                    backgroundColor: theme.colors.primary
                }}
            />
        </View>
    );
};

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