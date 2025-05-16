import {View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {router, useLocalSearchParams} from "expo-router";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

const Hospital = () => {
    const { type } = useLocalSearchParams<{ type : string }>();
    const hospitals = useQuery(api.hospitals.getHospitals , {type});

    return (
        <ScrollView>
            <View className="flex-1 items-center">
                <View className="flex flex-col items-center w-full h-screen sm:w-[640px] bg-background p-4 ">
                    <BackBar/>
                    <Navigation/>
                    {!hospitals ? (
                        <ActivityIndicator size="large" color="#3B82F6" />
                    ) : (
                        hospitals.map((hospital, index) => (
                            <View key={hospital._id}  className="flex items-center mb-5 bg-primary w-[90%] gap-5 p-7 rounded-3xl">
                                <View className="w-full gap-2">
                                    <Text className="text-4xl">{hospital.hospital_name}</Text>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/star.png')} style={{width: 20, height: 20}}/>
                                        <Text className="text-2xl">{hospital.rate} / 5.0</Text>
                                        <Text className="text-2xl">({hospital.reviews}개 리뷰)</Text>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/bookmark.png')} style={{width: 20, height: 20}}/>
                                        <Text className="text-2xl text-[#79BC6A]">{hospital.relative_price}</Text>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/location.png')} style={{width: 20, height: 20}}/>
                                        <Text className="text-2xl">{hospital.distance}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    className="flex items-center justify-center w-[90%] h-10  bg-buttonBlue rounded-2xl"
                                    onPress={()=> router.push('/')}
                                >
                                    <Text className="text-white">이미 낸 돈 쓰러 가기</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
            </View>
        </ScrollView>
        )
}

function Navigation() {
    return (
        <View className="flex items-center w-[90%] p-5 rounded-3xl mb-5">
            <View className="flex-row gap-3">
                <Image resizeMode="contain" source={require('../../assets/images/kit.png')} style={{width: 50, height: 50}}/>
                <View className="flex-1 gap-3">
                    <Text className="text-3xl">당신에게 가장 잘 맞는 2곳 골랐어요</Text>
                    <Text className="text-lg">가격, 거리, 리뷰를 모두 고려했어요</Text>
                    <Text className="text-sm">평균보다 저렴하고, 학교와 가까우며 만족도가 높은 병원을 우선 추천드려요</Text>
                </View>
            </View>
        </View>
    )}
export default Hospital
