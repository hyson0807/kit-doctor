import {View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import BackBar from "@/components/BackBar";
import {router} from "expo-router";

const CheckArc = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const [IsBorn, setIsBorn] = useState(false);
    const [switched, setSwitched] = useState(true);
    const [showNext, setShowNext] = useState(false);


    return (
                <View className="flex-1 items-center">
                    <View className="flex flex-col items-center  w-full h-screen sm:w-[640px] bg-background p-4 gap-10">
                        <BackBar />
                        {switched && <Arc/>}
                        {IsBorn && <Born/>}
                        {showNext && <Next/>}
                    </View>
                </View>

    )

    function Arc() {
        return (
            <View className="flex items-center justify-center  w-full h-40 rounded-3xl gap-4 bg-primary">
                <View>
                    <Text className="text-3xl font-extrabold" >ARC 카드가 있나요?</Text>
                </View>
                <View className="flex-row items-center justify-around w-full">
                    <TouchableOpacity onPress={() => {
                        setSwitched(false);    // ARC 질문 숨김
                        setIsBorn(true);
                    }}>
                        <View className="bg-buttonBlue w-40 h-14 rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white">예</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {


                    }}>
                        <View className="bg-buttonBlue w-40 h-14 rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white">아니오</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function Born() {


        const handleYearChange = (value: number) => {
            setSelectedYear(value);
            setShowNext(true); // ✅ 연도 선택하면 다음 컴포넌트 보여주기
        };

        return (
            <View className="flex items-center  w-full h-80 rounded-3xl gap-4">
                <View className="mt-8">
                    <Text className="text-3xl font-extrabold " >몇 년도에 태어났나요?</Text>
                </View>
                <Picker
                    style={{
                        height: 60, // Increase height for mobile
                        width: '80%', // Ensure it takes full width
                        color: 'black',
                    }}
                    selectedValue={selectedYear}
                    onValueChange={handleYearChange}
                    dropdownIconColor="black"
                >
                    {years.map((year) => (
                        <Picker.Item key={year} label={`${year}년`} value={year} />
                    ))}
                </Picker>
            </View>
        )
    }

    function Next() {
        return (
                <TouchableOpacity
                    className="flex items-center justify-center w-[80%] h-12 my-4  bg-buttonBlue rounded-2xl"
                    onPress={()=> router.push({
                        pathname: '/myBenefit',
                        params: { year: selectedYear.toString() }
                    })}
                >
                    <Text className="text-white">100% 당첨 혜택 보러가기</Text>
                </TouchableOpacity>
        )
    }
}
export default CheckArc
