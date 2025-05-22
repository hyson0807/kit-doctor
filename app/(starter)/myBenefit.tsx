import {View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import BackBar from "@/components/BackBar";
import {router} from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import {t} from "i18next";

const MyBenefit = () => {

    const { year } = useLocalSearchParams<{ year : string }>();
    const selectedYear = parseInt(year, 10);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ScrollView>
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-4 ">
                <BackBar/>
                {loading ? (
                    <View className="flex-1 items-center justify-center py-20">
                        <ActivityIndicator size="large" color="#1682F9" />
                        <Text className="mt-4 text-[18px] font-semibold">{t('Loading your benefit...')}</Text>
                    </View>
                ) : (
                    selectedYear % 2 === 0 ? (
                        <Teeth />
                    ) : (
                        <View className="flex-1 w-full items-center gap-5 pb-10">
                            <Teeth />
                            <Hospital />
                        </View>
                    )
                )}

            </View>
        </View>
        </ScrollView>
    )
}

function Teeth() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl ">
            <View className="flex-1 w-full bg-white p-3 rounded-2xl">
                <View className="flex items-center justify-center pt-5 p-2">
                    <Image  className="absolute right-0 top-0" resizeMode="contain" source={require('../../assets/images/firework.png')} style={{width: 44, height: 46}}/>
                    <Text className="text-[29px] font-bold">80% 할인</Text>
                    <Text className="text-[29px] font-bold">치아 스케일링 당첨!</Text>
                </View>
                <View className="flex items-center  py-5">
                    <Image  resizeMode="contain" source={require('../../assets/images/bigTeeth.png')} style={{width: 167, height: 126}}/>
                </View>
                <View className="flex items-center   px-1 py-3">
                    <Text className="text-2xl flex-shrink text-center font-bold">최대 사용가능 보험료</Text>
                    <Text className="text-4xl flex-shrink text-center font-bold">₩85,000</Text>
                </View>
                <View className="flex justify-center   p-3 mb-8 gap-7">
                    <View className="flex-row items-center w-full  gap-3">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">치석제거 & 치아 관리</Text>
                    </View>
                    <View className="flex-row items-center w-full  gap-3">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">1년에 한번 뿐인 기회</Text>
                    </View>
                    <View className="flex-row items-center w-full  gap-3 ">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">선진국 대비,{'\n'}85% 저렴한{'\n'}한국 치아 케어</Text>
                    </View>
                </View>


                <TouchableOpacity
                    className="flex items-center justify-center pl-[5%] gap-5 w-full px-3 py-5  bg-buttonBlue rounded-3xl"
                    onPress={()=> router.push({
                        pathname: "/hospital",
                        params: { type: "치과" }
                    })}
                >
                    {/*<Image className="absolute left-7" resizeMode="contain" source={require('../../assets/images/teeth.png')} style={{width: 25, height: 25}}/>*/}
                    <Text className="text-white text-[20.7px] font-bold flex-shrink text-center ">{t('Recommend a Dentist')}</Text>
                </TouchableOpacity>
                <View className="flex-row items-center justify-center mt-2 gap-2">
                    <Image resizeMode="contain" source={require('../../assets/images/bulb.png')} style={{width: 13, height: 19}}/>
                    <Text>당신의 돈 버리지 마세요!</Text>
                </View>
            </View>
        </View>
    )
}

function Hospital() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl ">
            <View className="flex-1 w-full bg-white p-3 rounded-2xl">
                <View className="flex items-center justify-center pt-5 p-2">
                    <Image  className="absolute right-0 top-0" resizeMode="contain" source={require('../../assets/images/firework.png')} style={{width: 44, height: 46}}/>
                    <Text className="text-[29px] font-bold">무료</Text>
                    <Text className="text-[29px] font-bold">건강검진 당첨!</Text>
                </View>
                <View className="flex items-center  py-5">
                    <Image  resizeMode="contain" source={require('../../assets/images/scope.png')} style={{width: 167, height: 126}}/>
                </View>
                <View className="flex items-center   px-1 py-3">
                    <Text className="text-2xl flex-shrink text-center font-bold">최대 사용가능 보험료</Text>
                    <Text className="text-4xl flex-shrink text-center font-bold">₩200,000</Text>
                </View>
                <View className="flex justify-center   p-3 mb-8 gap-7">
                    <View className="flex-row items-center w-full  gap-3">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">당신은 무료 대상자!</Text>
                    </View>
                    <View className="flex-row items-center w-full  gap-3">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">지금 놓치면 2년 후</Text>
                    </View>
                    <View className="flex-row items-center w-full  gap-3">
                        <Image resizeMode="contain" source={require('../../assets/images/check2.png')} style={{width: 37, height: 27}}/>
                        <Text className=" flex flex-shrink font-semibold text-[22px]">한국 생활의 혜택,{'\n'}무료 건강체크</Text>
                    </View>
                </View>


                <TouchableOpacity
                    className="flex items-center justify-center pl-[5%] gap-5 w-full px-3 py-5  bg-buttonBlue rounded-3xl"
                    onPress={()=> router.push({
                        pathname: "/hospital",
                        params: { type: "병원" }
                    })}
                >
                    {/*<Image className="absolute left-7" resizeMode="contain" source={require('../../assets/images/teeth.png')} style={{width: 25, height: 25}}/>*/}
                    <Text className="text-white text-[20.7px] font-bold flex-shrink text-center ">{t('Recommend a Clinic')}</Text>
                </TouchableOpacity>
                <View className="flex-row items-center justify-center mt-2 gap-2">
                    <Image resizeMode="contain" source={require('../../assets/images/bulb.png')} style={{width: 13, height: 19}}/>
                    <Text>당신의 돈 버리지 마세요!</Text>
                </View>
            </View>
        </View>
    )
}

export default MyBenefit
