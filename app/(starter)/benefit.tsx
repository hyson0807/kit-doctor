import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import BackBar from "@/components/BackBar";
import {t} from "i18next";

const Benefit = () => {

    const { year } = useLocalSearchParams<{ year : string }>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <View className="flex-1 items-center">
            {loading ? (
                <View className="flex-1 h-full items-center justify-center py-20">
                    <ActivityIndicator size="large" color="#1682F9" />
                    <Text className="mt-4 text-[18px] font-semibold">{t('Loading your benefit...')}</Text>
                </View>
            ) : (
                <View className="flex-1 flex-col items-center w-full sm:w-[640px] bg-background p-4">
                    <BackBar/>
                    <View className="flex-1 w-full p-4">
                        <View className="flex-row">
                            <Text className="text-[40px] font-bold">최대 </Text>
                            <Text className="text-[40px] font-extrabold">₩285,000</Text>
                        </View>
                        <Text className="text-[40px] font-bold">돌려받을 수 있는 혜택{'\n'}찾았어요!</Text>
                    </View>
                    <TouchableOpacity className=" flex items-center justify-center w-[80%] mt-8 p-4 my-4  bg-buttonBlue rounded-2xl" onPress={() =>{
                        router.push({
                            pathname: '/info',
                            params: { year: year.toString() }
                        })
                    } }>
                        <Text className="text-white text-[20.7px] font-bold text-center">{t('check my benefit')}</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )
}
export default Benefit
