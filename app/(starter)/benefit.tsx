import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {router, useLocalSearchParams} from "expo-router";
import BackBar from "@/components/BackBar";
import {t} from "i18next";

const Benefit = () => {

    const { year } = useLocalSearchParams<{ year : string }>();

    return (
        <View className="flex-1 items-center">
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
        </View>
    )
}
export default Benefit
