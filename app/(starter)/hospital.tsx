import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import HospitalDetails from "@/components/HospitalDetails";

const Hospital = () => {
    return (
        <ScrollView>
            <View className="flex-1 items-center">
                <View className="flex flex-col items-center  w-full h-screen sm:w-[640px] g-background p-4 ">
                    <BackBar/>
                    <View className="flex items-center bg-primary w-[90%] p-5 rounded-3xl mb-5">
                        <View className="flex-row gap-3">
                            <Image resizeMode="contain" source={require('../../assets/images/kit.png')} style={{width: 50, height: 50}}/>
                            <View className="flex-1 gap-3">
                                <Text className="text-3xl">당신에게 가장 잘 맞는 2곳 골랐어요</Text>
                                <Text className="text-lg">가격, 거리, 리뷰를 모두 고려했어요</Text>
                                <Text className="text-sm">평균보다 저렴하고, 학교와 가까우며 만족도가 높은 병원을 우선 추천드려요</Text>
                            </View>
                        </View>

                    </View>
                    <HospitalDetails/>


                </View>
            </View>
        </ScrollView>
        )

}
export default Hospital
