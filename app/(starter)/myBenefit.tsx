import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {router} from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import {t} from "i18next";

const MyBenefit = () => {

    const { year } = useLocalSearchParams<{ year : string }>();
    const selectedYear = parseInt(year, 10);

    return (
        <ScrollView>
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-4 gap-10">
                <BackBar/>
                { selectedYear % 2 === 0 ? <Teeth/> : (
                    <View className="flex-1 w-full items-center gap-5 pb-10">
                        <Teeth/>
                        <Hospital/>
                    </View>
                    )}

            </View>
        </View>
        </ScrollView>
    )
}

function Teeth() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl ">
            <Text className="text-[22px] font-bold">{t('It\'s a once a year chance !')}</Text>
            <View className="flex items-center justify-center w-full p-4 bg-white rounded-3xl gap-2">
                <Text className="text-[23px] font-bold text-center">{t('Max benefit you can use')}</Text>
                <Text className="text-[40px] font-bold">₩85,000</Text>
            </View>
            <View className="gap-5  w-[80%]">
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('Dental scaling')}</Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('Tooth care , Dental cleaned')}</Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('Pay 20%, get 100% of the care-only in')}</Text>
                </View>
            </View>

            <TouchableOpacity
                className="flex items-center justify-center pl-[5%] gap-5 w-full p-3  bg-buttonBlue rounded-2xl"
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

function Hospital() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl">
            <Text className="text-[22px] font-bold">{t('You won 50% chance!')}</Text>
            <View className="flex items-center justify-center w-full p-4 bg-white rounded-3xl gap-2">
                <Text className="text-[23px] font-bold text-center">{t('Max benefit you can use')}</Text>
                <Text className="text-[40px] font-bold">₩200,000</Text>
            </View>
            <View className="gap-5  w-[80%]">
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('You can do Free Health Check-up')}</Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('Miss it now, Wait 2 years.')}</Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                    <Text className="flex-shrink text-[18.4px] font-semibold">{t('Benefit of Korea Life,')}</Text>
                </View>
            </View>

            <TouchableOpacity
                className="flex-row items-center justify-center pl-[5%] gap-5 w-full p-3  bg-buttonBlue rounded-2xl"
                onPress={()=> router.push({
                    pathname: "/hospital",
                    params: { type: "병원" }
                })}
            >
                {/*<Image className="absolute left-7" resizeMode="contain" source={require('../../assets/images/hospital.png')} style={{width: 25, height: 25}}/>*/}
                <Text className="text-white text-[20.7px] font-bold flex-shrink text-center">{t('Recommend a Clinic')}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MyBenefit
