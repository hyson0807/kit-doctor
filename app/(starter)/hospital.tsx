import {View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import {router, useLocalSearchParams} from "expo-router";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {t} from "i18next";

const Hospital = () => {
    const { type } = useLocalSearchParams<{ type : string }>();
    const hospitals = useQuery(api.hospitals.getHospitals , {type});

    return (
        <ScrollView>
            <View className="flex-1 items-center">
                <View className="flex flex-col items-center w-full h-full sm:w-[640px] bg-background p-4 ">
                    <BackBar/>
                    <Navigation/>
                    {!hospitals ? (
                        <ActivityIndicator size="large" color="#3B82F6" />
                    ) : (
                        hospitals.map((hospital, index) => (
                            <View key={hospital._id}  className="flex items-center mb-5 bg-primary w-[90%] gap-5 p-7 rounded-3xl">
                                <View className="w-full gap-2">
                                    <Text className="text-[40px] font-bold mb-2">{hospital.hospital_name}</Text>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/star.png')} style={{width: 20, height: 20}}/>
                                        <Text className="text-2xl font-bold">{hospital.rate} / 5.0</Text>
                                        <Text className="text-2xl font-bold">({hospital.reviews} reviews)</Text>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/bookmark.png')} style={{width: 20, height: 20}}/>
                                        <Text className="line-through text-2xl text-[#79BC6A]">{hospital.actual_price} </Text>
                                        <Text>-{'>'}</Text>
                                        <Text className="text-2xl font-bold text-[#79BC6A]">{hospital.price}</Text>

                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <Image resizeMode="contain" source={require('../../assets/images/location.png')} style={{width: 20, height: 20}}/>
                                        <Text className="text-2xl font-bold">{hospital.distance}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    className="flex items-center justify-center w-full py-3  bg-buttonBlue rounded-2xl"
                                    onPress={()=> router.push({
                                        pathname: '/getServices',
                                        params: { hospital_id: hospital._id }
                                    })}
                                >
                                    <Text className="text-white text-[20.7px] font-bold text-center">{t('Use What You Already Paid')}</Text>
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
        <View className="flex items-center w-full p-2 rounded-3xl my-5 ">
            <View className="flex-row gap-3">
                <Image className="" resizeMode="contain" source={require('../../assets/images/kit.png')} style={{width: 50, height: 50 }}/>
                <View className="flex-1 gap-3">
                    <Text className="text-[28px] font-bold">{t('We picked the 2 Best clinics for you')}</Text>
                    <Text className="text-[18px]">{t('We considered price, distance, and reviews.')}</Text>
                    <Text className="text-[14px]">{t('Clinics are recommended based on distance from school, and high satisfaction ratings.')}</Text>
                </View>
            </View>
        </View>
    )}
export default Hospital
