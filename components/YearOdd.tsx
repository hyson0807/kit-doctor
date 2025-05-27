import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {router} from "expo-router";
import {t} from "i18next";

const YearOdd = () => {
    return (
        <View className="flex items-center w-full ">
            <View className="flex flex-row items-center justify-center w-full gap-2 ">
                <View className="flex-1 items-center h-full  rounded-3xl bg-primary">
                    <Left/>
                </View>
                <View className="flex-1 items-center h-full  rounded-3xl bg-primary ">
                    <Right/>
                </View>
            </View>
            <View className="flex items-center justify-center w-full my-3">
                <Text className="text-center flex-shrink font-medium">Feel too hassle?{'\n'}We will do everything for you  directly!</Text>
            </View>

            <TouchableOpacity
                className=" flex items-center justify-center pl-[5%] gap-5 w-full px-3 py-5  bg-buttonBlue rounded-3xl"
                onPress={()=> router.push({
                    pathname: "/hospital",
                    params: { type: "치과" }
                })}
            >
                {/*<Image className="absolute left-7" resizeMode="contain" source={require('../../assets/images/teeth.png')} style={{width: 25, height: 25}}/>*/}
                <Text className="text-white text-[20.7px] font-bold flex-shrink text-center ">{t('Recommend a Dentist')}</Text>
            </TouchableOpacity>
        </View>
    )
}

function Right() {
    return (
        <View className="flex-1 items-center bg-white w-[90%] my-3 rounded-3xl ">
            <View className="flex items-center justify-center pt-5 p-2">
                <Text className="text-[18px] font-bold">70% off</Text>
                <Text className="text-[18px] font-bold text-center">hospital use</Text>
            </View>
            <View className="flex items-center">
                <Image  resizeMode="contain" source={require('../assets/images/scope.png')} style={{width: 83, height: 63}}/>
            </View>

            <View className="flex-1 justify-center p-3 gap-7 ">
                <View className="flex-row items-center w-full  gap-3">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">Muscle{'\n'}shoulder pain</Text>
                </View>
                <View className="flex-row items-center w-full  gap-3">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">Cold & Stomachache</Text>
                </View>
                <View className="flex-row items-center w-full  gap-3">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">{t('Free health check-up Benefits of Korea Life')}</Text>
                </View>

            </View>
        </View>
    )
}

function Left() {
    return (
        <View className="flex-1 w-[90%] items-center rounded-3xl bg-white my-3 ">
            <View className="flex items-center justify-center pt-5 p-2">
                <Text className="text-[18px] font-bold">{t('80% off')}</Text>
                <Text className="text-[18px] font-bold text-center">{t('Dental scaling winner!')}</Text>
            </View>
            <View className="flex items-center">
                <Image  resizeMode="contain" source={require('../assets/images/bigTeeth.png')} style={{width: 83, height: 63}}/>
            </View>

            <View className="flex-1 justify-center p-3 gap-7">
                <View className="flex-row items-center w-full  gap-3 ">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">{t('Dental care & Tooth cleaned')}</Text>
                </View>
                <View className="flex-row items-center w-full  gap-3">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">{t('Once a year chance')}</Text>
                </View>
                <View className="flex-row items-center w-full  gap-3 ">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">{t('85% cheaper Korean dental service')}</Text>
                </View>
                <View className="flex-row items-center w-full  gap-3 ">
                    <Image resizeMode="contain" source={require('../assets/images/check2.png')} style={{width: 18, height: 14}}/>
                    <Text className=" flex flex-shrink font-semibold text-[14px]">{t('85% cheaper Korean dental service')}</Text>
                </View>

            </View>
        </View>
    )
}
export default YearOdd
