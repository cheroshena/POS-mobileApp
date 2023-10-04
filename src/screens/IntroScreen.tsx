import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '@react-navigation/native';

const IntroScreen = ({ navigation }: RootStackScreenProps<"introScreen">) => {
    const { colors } = useTheme();
    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('IntroScreen01');
        }, 2800);
    }, []);
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Image
                        source={require('../assets/images/logo3.png')}
                        style={{
                            width: 230,
                            height: 230,
                            resizeMode: 'contain',
                        }}
                    />

                </View>
                <View style={{ alignItems: 'center',marginBottom:70 }}>
                    <Text style={{ fontSize: 14,fontWeight: "600",opacity:0.75 ,color:"#0298CA"}}>Version 1.2.1</Text>
                </View>

            </View>




        </View>
    )


};



export default IntroScreen