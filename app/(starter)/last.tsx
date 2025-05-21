import {View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {router, useLocalSearchParams} from "expo-router";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {t} from "i18next";

const GetServices = () => {

    return (
        <ScrollView>
            <View className="flex-1 items-center">
                <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-3 ">
                    <BackBar />
                    <View className="flex gap-10 items-center ">
                        <View className="flex items-center w-[90%] p-2 gap-5 bg-primary">
                            <Text>무료 서비스 당첨!</Text>
                        </View>
                        <View className="flex items-center w-[90%] p-2 gap-5 bg-primary">
                            <Text>설문지 작성해주시면 </Text>
                            <Text>저희가 당신의 보험료를 통해, 할인된 가격으로 한국의 의료 서비스 예약 & 설명까지 도와줄게요!</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default GetServices
