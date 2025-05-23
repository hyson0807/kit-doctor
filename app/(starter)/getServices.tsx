import {View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView, Platform, Alert} from 'react-native'
import React, {useState, useRef} from 'react'
import BackBar from "@/components/BackBar";
import {router, useLocalSearchParams} from "expo-router";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {t} from "i18next";

const GetServices = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { hospital_id } = useLocalSearchParams<{ hospital_id : string }>();
    const hospital = useQuery(api.hospitals.getHospitalById, {
        id: hospital_id as Id<"hospitals">,
    });
    const scrollRef = useRef<ScrollView>(null);

    function Check() {
        return(
            <View className="absolute top-0 left-0 w-full h-full bg-black/40 items-center justify-center z-50">
                <View className="bg-white p-6 rounded-2xl w-[85%] items-center gap-4">
                    <Text className="text-lg font-bold text-center">
                        {t("₩500 will be charged. Would you like to proceed?")}
                    </Text>
                    <View className="flex-row gap-4 mt-4">
                        <TouchableOpacity
                            className="bg-gray-300 rounded-xl px-4 py-2"
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text>{t('Cancel')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-buttonBlue rounded-xl px-4 py-2"
                            onPress={() => {
                                setIsModalVisible(false);
                                router.push('/last');
                            }}
                        >
                            <Text className="text-white">{t('Yes')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View className="flex-1 ">
        {isModalVisible && (
            <Check />
        )}
        <ScrollView ref={scrollRef}>
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-3 ">
                <BackBar />

                <View className="flex items-center w-[90%] p-2 gap-5">
                    <View className="flex w-full items-center bg-primary gap-2 p-6 rounded-3xl">
                        <Text className="text-[25px] font-bold flex-shrink text-center">{t('Insurance Benefits You almost missed')}</Text>
                        {!hospital || hospital.price === undefined || hospital.type === undefined ? (
                            <ActivityIndicator size="large" color="#3B82F6" />
                        ) : (
                            <Text className="text-[40px] font-bold">
                                ₩
                                {Number(
                                    (hospital.type === "병원" ? 200000 : 100000) - parseInt(hospital.price)
                                ).toLocaleString()}
                            </Text>
                        )}

                    </View>

                    <View className="flex w-full  gap-2 pl-2 pt-2 rounded-3xl">
                        <Text className="text-[24px] font-bold">{t("One click, No stress")}</Text>
                        <Text className="text-[18px] font-bold">{t('Don\'t lose your money already paid!')}</Text>
                    </View>
                    <View className="bg-primary flex items-center w-full  gap-8 p-8 rounded-3xl">

                        <View className="w-full">
                            <Text className="text-[23px] font-bold text-[#729FE8]">{t('All this, just 500 KRW')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center">
                            <Image resizeMode="contain" source={require('../../assets/images/money.png')} style={{width: 29, height: 29}}/>
                            <Text className=" text-[18.4px] flex-shrink font-medium">{t('Assist to get 80% discount')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center">
                            <Image resizeMode="contain" source={require('../../assets/images/hospital2.png')} style={{width: 29, height: 29}}/>
                                <Text className=" text-[18.4px] flex-shrink font-medium">{t('Proxy symptom explanation')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center">
                            <Image resizeMode="contain" source={require('../../assets/images/calendar.png')} style={{width: 29, height: 29}}/>
                            <Text className=" text-[18.4px] flex-shrink font-medium">{t('Reservation Clinic')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center ">
                            <Image resizeMode="contain" source={require('../../assets/images/checkList.png')} style={{width: 29, height: 29}}/>
                            <Text className=" text-[18.4px] flex-shrink font-medium">{t('Medical service guide')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center">
                            <Image resizeMode="contain" source={require('../../assets/images/message.png')} style={{width: 29, height: 29}}/>
                            <Text className=" text-[18.4px] flex-shrink font-medium">{t('Just use your language')}</Text>
                        </View>
                        <View className="flex-row w-full gap-4 items-center">
                            <Image resizeMode="contain" source={require('../../assets/images/talk.png')} style={{width: 29, height: 29}}/>
                            <View className="flex-1 w-full ">
                                <Text className=" text-[18.4px] flex-shrink font-medium">{t('Some issue?')}</Text>
                                <Text className=" text-[18.4px] flex-shrink font-medium">{t('Talk with hospital for you')}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex items-center justify-center w-full gap-3">
                        <TouchableOpacity
                            className="flex items-center justify-center w-full p-3 bg-buttonBlue rounded-2xl"
                            onPress={() => {
                                scrollRef.current?.scrollTo({ y: 0, animated: true });

                                // 약간의 지연을 주고 모달을 띄움 (스크롤 애니메이션 후)
                                setTimeout(() => {
                                    setIsModalVisible(true);
                                }, 300); // 300ms 정도면 충분
                            }}
                        >
                            <Text className="text-white font-bold text-[20.7px] flex-shrink text-center">
                                {t('Get All Benefits')}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        </View>
    )


}


export default GetServices
