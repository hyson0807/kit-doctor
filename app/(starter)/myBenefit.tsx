import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import BackBar from "@/components/BackBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {router} from "expo-router";
import { useLocalSearchParams } from 'expo-router';

const MyBenefit = () => {

    const { year } = useLocalSearchParams<{ year : string }>();
    const selectedYear = parseInt(year, 10);

    return (
        <ScrollView>
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-4 gap-10">
                <BackBar/>
                { selectedYear % 2 === 0 ? <Teeth/> : (
                    <View className="flex-1 w-full items-center gap-5">
                        <Teeth/>
                        <Hospital/>
                    </View>
                    )}

            </View>
        </View>
        </ScrollView>
    )
}

function Teeth() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl">
            <Text className="text-2xl font-bold">1년에 한번 뿐인 기회에요!</Text>
            <View className="flex items-center justify-center w-[80%] h-28 bg-white rounded-3xl gap-2">
                <Text className="text-2xl">최대 사용가능 보험료</Text>
                <Text className="text-3xl font-extrabold">85,000원</Text>
            </View>
            <View className="gap-5  w-[80%]">
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">치아 스케일링</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">치석 제거 / 치아 케어</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">선진국 대비, 80% 저렴한 한국 치아 케어</Text>
                </View>
            </View>

            <TouchableOpacity
                className="flex-row items-center justify-start pl-[5%] gap-5 w-[80%] h-12  bg-buttonBlue rounded-2xl"
                onPress={()=> router.push({
                    pathname: "/hospital",
                    params: { type: "치과" }
                })}
            >
                <Image resizeMode="contain" source={require('../../assets/images/teeth.png')} style={{width: 25, height: 25}}/>
                <Text className="text-white">치과 추천받기</Text>
            </TouchableOpacity>

        </View>
    )
}

function Hospital() {
    return (
        <View className="flex items-center bg-primary w-[90%] gap-5 p-5 rounded-3xl">
            <Text className="text-2xl font-bold">1/2 확률로 당첨되었어요!</Text>
            <View className="flex items-center justify-center w-[80%] h-28 bg-white rounded-3xl gap-2">
                <Text className="text-2xl">최대 사용가능 보험료</Text>
                <Text className="text-3xl font-extrabold">200,000원</Text>
            </View>
            <View className="gap-5  w-[80%]">
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">당신은 무료 대상자에요!</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">지금 놓치면 2년 후에</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <FontAwesome name="check-circle" size={24} color="blue" />
                    <Text className="flex-shrink">한국생활의 혜택, 무료 건강 체크</Text>
                </View>
            </View>

            <TouchableOpacity
                className="flex-row items-center justify-start pl-[5%] gap-5 w-[80%] h-12  bg-buttonBlue rounded-2xl"
                onPress={()=> router.push({
                    pathname: "/hospital",
                    params: { type: "병원" }
                })}
            >
                <Image resizeMode="contain" source={require('../../assets/images/hospital.png')} style={{width: 25, height: 25}}/>
                <Text className="text-white">병원 추천받기</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MyBenefit
