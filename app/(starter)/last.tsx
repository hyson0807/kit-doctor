import {View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {router, useLocalSearchParams} from "expo-router";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";

const Last = () => {

    const { hospital_id } = useLocalSearchParams<{ hospital_id : string }>();

    const hospital = useQuery(api.hospitals.getHospitalById, {
        id: hospital_id as Id<"hospitals">,
    });


    return (
        <ScrollView>
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-3 ">
                <BackBar />
                <View className="flex items-center w-[90%] p-2 gap-5">
                    <View className="flex w-full items-center bg-primary gap-2 p-6 rounded-3xl">
                        <Text className="text-3xl font-bold flex-shrink">당신이 놓칠 뻔 한 보험료</Text>
                        {!hospital || hospital.price === undefined ? (<ActivityIndicator size="large" color="#3B82F6" />) : (<Text className="text-4xl font-bold">{100000 - parseInt(hospital.price)}원</Text>)}
                    </View>
                    <View className="bg-primary flex items-center w-full  gap-8 p-8 rounded-3xl">

                        <View className="w-full">
                            <Text className="text-2xl font-bold">이제 마지막이에요!</Text>
                            <Text className="text-2xl font-bold">Kit가 다 대신 해줄게요</Text>
                        </View>
                        <View className="flex-row w-full gap-3">
                            <Image resizeMode="contain" source={require('../../assets/images/checkbox.png')} style={{width: 20, height: 20}}/>
                            <Text className=" text-xl flex-shrink">너가 선택한 병원은 10만원에서 2만원</Text>
                        </View>
                        <View className="flex-row w-full gap-3">
                            <Image resizeMode="contain" source={require('../../assets/images/checkbox.png')} style={{width: 20, height: 20}}/>
                                <Text className=" text-xl flex-shrink">가격 다르면, Kit가 병원에 대신 확인해줄께요</Text>
                        </View>
                        <View className="flex-row w-full gap-3">
                            <Image resizeMode="contain" source={require('../../assets/images/checkbox.png')} style={{width: 20, height: 20}}/>
                            <Text className=" text-xl flex-shrink">예약&설명&가이드 대신 해줄께요</Text>
                        </View>
                        <View className="flex-row w-full gap-3 mb-10">
                            <Image resizeMode="contain" source={require('../../assets/images/checkbox.png')} style={{width: 20, height: 20}}/>
                            <Text className=" text-xl flex-shrink">한국말 없이, 너는 Kit화면만 보여주면 되요</Text>
                        </View>

                        <View className="flex items-center justify-center w-full gap-3">
                            <Text className="font-bold">W1,500-₩500</Text>
                            <TouchableOpacity
                                className="flex items-center justify-center pl-[5%] gap-5 w-[80%] h-12  bg-buttonBlue rounded-2xl"
                                onPress={()=> router.push('/')}
                            >
                                <Text className="text-white font-bold text-xl">모든 서비스 받기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
export default Last
