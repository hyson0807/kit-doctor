import {View, Text, ScrollView, Image, ActivityIndicator, } from 'react-native'
import React, {useEffect, useState} from 'react'
import BackBar from "@/components/BackBar";
import {t} from "i18next";
import YearEven from "@/components/YearEven";
import {useUserInfo} from "@/stores/userInfo";
import YearOdd from "@/components/YearOdd";

const MyBenefit = () => {
    const { name, email, year } = useUserInfo();

    const selectedYear = parseInt(year, 10);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);


    const BenefitPrice = year && parseInt(year) % 2 === 0 ? 250000 : 285000;

    return (
        <ScrollView>
        <View className="flex-1 items-center">
            <View className="flex-1 flex-col items-center w-full h-full sm:w-[640px]  bg-background p-4 ">
                <BackBar/>
                <View className="flex justify-center w-full pt-5 p-4 mb-4 ">
                    <Image  className="absolute right-0 top-0" resizeMode="contain" source={require('../../assets/images/firework.png')} style={{width: 44, height: 46}}/>
                    <Text className="text-[29px] font-bold">{t('This is benefits for money you\'ve already paid')}</Text>
                </View>
                <View className="bg-primary w-full h-[29px] rounded-2xl"/>
                <View className="flex justify-center w-full p-4">
                    <Text className="font-bold text-xl">{t('Miss now, this money disappear')}</Text>
                    <Text className="font-bold text-[32px]">₩{Number(BenefitPrice).toLocaleString()}</Text>
                </View>

                {loading ? (
                    <View className="flex-1 h-full items-center justify-center py-20">
                        <ActivityIndicator size="large" color="#1682F9" />
                        <Text className="mt-4 text-[18px] font-semibold">{t('Loading your benefit...')}</Text>
                    </View>
                ) : (
                    selectedYear % 2 === 0 ? (
                        <YearEven/>
                    ) : (
                        <YearOdd/>
                    )
                )}



            </View>
        </View>
        </ScrollView>
    )
}





export default MyBenefit
