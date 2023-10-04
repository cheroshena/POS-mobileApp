import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { Gesture, GestureDetector, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';



const MAX_PRICE = 500;

const PriceRangeSelector = ({
    minPrice, maxPrice, startPrice, endPrice, onStartPriceChange, onEndPriceChange
}: {
    minPrice: number;
    maxPrice: number;
    startPrice: number;
    endPrice: number;
    onStartPriceChange: (value: number) => void;
    onEndPriceChange: (value: number) => void;
}) => {
    const { colors } = useTheme();
    const theme = useTheme();
    const leftHandlePos = useSharedValue(0);
    const rightHandlePos = useSharedValue(0);
    const [barWidth, setBarWidth] = useState(0)


    const startHandleGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,
        {
            prevPos: number
        }
    >({
        onStart(event, context) {
            context.prevPos = leftHandlePos.value;
        },
        onActive(event, context) {
            leftHandlePos.value = Math.min(
                rightHandlePos.value,
                Math.max(0, context.prevPos + event.translationX));

            runOnJS(onStartPriceChange)(Math.round((maxPrice / barWidth) * leftHandlePos.value));
        },
    });



    const rightHandleGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,
        {
            prevPos: number
        }
    >({
        onStart(event, context) {
            context.prevPos = rightHandlePos.value;
        },
        onActive(event, context) {
            rightHandlePos.value = Math.min(
                barWidth,
                Math.max(leftHandlePos.value, context.prevPos + event.translationX));

            runOnJS(onEndPriceChange)(Math.round((maxPrice / barWidth) * rightHandlePos.value));
        },
    });



    const leftHandleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: leftHandlePos.value,
            },
        ],
    }));



    const rightHandleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: rightHandlePos.value,
            },
        ],
    }));

    const barHighlightStyle = useAnimatedStyle(() => ({
        left: leftHandlePos.value,
        right: barWidth - rightHandlePos.value,
    }

    ))

    useEffect(() => {
        if (barWidth === 0) return;
        leftHandlePos.value = (startPrice * barWidth) / maxPrice;
        rightHandlePos.value = (endPrice * barWidth) / maxPrice;
    }, [barWidth])

    return (

        <View
            style={{
                paddingHorizontal: 24
            }}>
            <View style={{ marginBottom: 24 }}>
                <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 16
                        }}>Price Range</Text>

            </View>
           
            <Text
                style={{
                    marginTop:20,
                    color: theme.colors.text,
                    opacity: 0.5,
                    position: "absolute",
                    top: 12,
                    left: 10
                }}>
                LKR {minPrice}
            </Text>
            <Text
                style={{
                    marginTop:20,
                    color: theme.colors.text,
                    opacity: 0.5,
                    position: "absolute",
                    top: 12,
                    right: 10
                }}>
                LKR {maxPrice}
            </Text>
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: theme.colors.border,
                    position: 'relative',
                    marginBottom: 14,
                }}
                onLayout={(event) => {
                    setBarWidth(event.nativeEvent.layout.width);
                }}
            >
                <Animated.View
                    style={[barHighlightStyle, {
                        position: 'absolute',
                        height: "100%",
                        backgroundColor: theme.colors.primary,
                    }]}
                />

                <PanGestureHandler onGestureEvent={startHandleGesture}>
                    <Animated.View style={[leftHandleStyle, { position: "absolute", zIndex: 10 }]}>
                        <SliderHandle label={`LKR ${startPrice}`} />
                    </Animated.View>
                </PanGestureHandler>
                <PanGestureHandler onGestureEvent={rightHandleGesture}>
                    <Animated.View style={[rightHandleStyle, { position: "absolute", zIndex: 10 }]}>
                        <SliderHandle label={`LKR ${endPrice}`} />
                    </Animated.View>
                </PanGestureHandler>




            </View>
        </View>
    )
}

export default PriceRangeSelector



const SliderHandle = ({ label }: { label: string }) => {
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
                backgroundColor: theme.colors.background,
                position: 'relative',
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
            <View style={{ position: "absolute", top: 24, width: 200, alignItems: "center" }}>
                <View style={{ backgroundColor: theme.colors.card }}>
                    <Text numberOfLines={1} style={{ color: theme.colors.text }} >{label}</Text>
                </View>

            </View>
        </View>
    );
};