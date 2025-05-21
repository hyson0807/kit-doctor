import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {t} from "i18next";
import {router} from "expo-router";

const GetServices = () => {

    return (
            <View className="flex-1 items-center">
                <View className="flex flex-col items-center  w-full h-full sm:w-[640px] p-4 ">
                        <BackBar />
                    <View className="flex-1 w-full h-full  m-5 gap-8">
                        <View className="flex items-center justify-center w-full h-[132px] bg-primary rounded-2xl p-1">
                            <Text className="text-center font-extrabold text-4xl">{t('You\'ve won a free service!')}</Text>
                        </View>
                        <View className="flex-1 items-center justify-center w-full h-[132px] gap-10 bg-primary rounded-2xl">
                            <Text className="text-2xl text-center font-bold">{t('If you fill out the survey,')}</Text>
                            <Text className="text-2xl text-center font-bold">{t('We\'ll use your insurance')}</Text>
                        </View>


                    </View>
                </View>
            </View>
    )
}
export default GetServices
