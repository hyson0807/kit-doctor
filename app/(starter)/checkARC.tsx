import {View,Text, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import BackBar from "@/components/BackBar";
import {router} from "expo-router";
import {t} from "i18next";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";

const CheckArc = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const [IsBorn, setIsBorn] = useState(false);
    const [switched, setSwitched] = useState(true);
    const [showNext, setShowNext] = useState(false);
    const [showNo, setShowNo] = useState(false);


    return (
                <View className="flex-1 items-center">
                    <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-4 gap-10">
                        <BackBar />
                        {switched && <Arc/>}
                        {IsBorn && <Born/>}
                        {showNo && <IfNo/>}
                        {showNext && <Next/>}
                    </View>
                </View>

    )

    function Arc() {
        return (
            <View className="flex items-center justify-center  w-full p-6 rounded-3xl gap-4 bg-primary">
                <View>
                    <Text className="text-[26px] font-extrabold text-center" >{t("do you have arc card")}</Text>
                </View>
                <View className="flex-row items-center justify-around w-full">
                    <TouchableOpacity onPress={() => {
                        setSwitched(false);    // ARC 질문 숨김
                        setShowNo(false);
                        setIsBorn(true);
                    }}>
                        <View className="bg-buttonBlue w-[147px] h-[49px] rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white text-[20.7px] font-bold">{t('yes')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowNo(true);


                    }}>
                        <View className="bg-buttonBlue w-[147px] h-[49px] rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white text-[20.7px] font-bold">{t('no')}</Text>
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
            <View className="flex items-center justify-center w-full p-4 rounded-3xl gap-4  ">
                <View className="flex items-center justify-center p-4">
                    <Text className="text-3xl text-center font-extrabold mb-10" >{t('select the year you born')}</Text>
                </View>
                <Picker
                    style={{
                        height: 60, // Increase height for mobile
                        width: '80%', // Ensure it takes full width
                        color: 'black',
                        borderRadius: 10,
                        marginBottom: 10,
                        backgroundColor: "#F2F3F4"

                    }}
                    selectedValue={selectedYear}
                    onValueChange={handleYearChange}
                    dropdownIconColor="black"
                >
                    {years.map((year) => (
                        <Picker.Item key={year} label={`${year}`} value={year} />
                    ))}
                </Picker>
            </View>
        )
    }

    function Next() {
        return (
                <TouchableOpacity
                    className="flex items-center justify-center w-[80%] mt-40 p-4 my-4  bg-buttonBlue rounded-2xl"
                    onPress={()=> router.push({
                        pathname: '/myBenefit',
                        params: { year: selectedYear.toString() }
                    })}
                >
                    <Text className="text-white text-[20.7px] font-bold text-center">{t('check my benefit')}</Text>
                </TouchableOpacity>
        )
    }

    function IfNo() {
        const getNumber = useMutation(api.users.getNumber);
        const [number, setNumber] = useState('');

        const sendNumber = async () => {
            if(!number || number.trim() === "") {
                alert("please enter your number!");
                return;
            }

            try {
                await getNumber({number : number});
                alert("number sent successfully!");
                setNumber('');

            } catch (e: any) {
                console.log(e);
                alert(e.message || "An unexpected error occurred. Please try again later.");
            }

        }
        return(
            <View className="flex justify-center  w-full  rounded-3xl p-5 pl-12 gap-5 bg-primary ">
                    <Text className="text-[24px] font-extrabold" >{t('Don\'t worry! leave your number to get benefit alert after you get ARC Card')}</Text>
                    <View className="flex-row items-center gap-5">
                    <TextInput
                        className="w-[241px] h-[44px] bg-white px-4 rounded-lg"
                        placeholder={t("Phone Number")}
                        value={number}
                        onChangeText={setNumber}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#888"
                    />
                        <TouchableOpacity onPress={sendNumber}>
                            <AntDesign name="rightcircle" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

            </View>
        )
    }
}
export default CheckArc
