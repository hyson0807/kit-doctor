import BackBar from "@/components/BackBar";
import { api } from "@/convex/_generated/api";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useMutation } from "convex/react";
import { router } from "expo-router";
import { t } from "i18next";
import React, {useEffect, useRef, useState} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const CheckArc = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [showArc, setShowArc] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [showNo, setShowNo] = useState(false);

    return (
                <View className="flex-1 items-center">
                    <View className="flex flex-col items-center  w-full h-full sm:w-[640px] bg-background p-4 gap-10">
                        <BackBar />
                        {showArc && <Arc/>}
                        {showInfo && <Info/>}
                        {showNo && <IfNo/>}
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
                        setShowNo(false);
                        setShowInfo(true);
                    }}>
                        <View className="bg-buttonBlue w-[147px] h-[49px] rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white text-[20.7px] font-bold">{t('yes')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowNo(true);
                        setShowInfo(false);
                    }}>
                        <View className="bg-buttonBlue w-[147px] h-[49px] rounded-3xl p-2 items-center justify-center">
                            <Text className="text-white text-[20.7px] font-bold">{t('no')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function Info() {
        const [year, setYear] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        function check() {
            if(year.length === 4 && name.trim() !== "" && email.trim() !== "") {
                router.push({
                    pathname: '/myBenefit',
                    params: { year: selectedYear.toString() }
                })
            } else {
                alert("please fill all the fields!");
            }

        }

        return (
            <View className="flex-1 items-center w-full">
                <View className="flex items-center justify-center p-4 bg-primary rounded-3xl w-full gap-4">
                        <Text className="text-3xl text-center flex-shrink font-extrabold">
                            {t('select the year you born')}
                        </Text>
                        <TextInput
                            value={year}
                            onChangeText={setYear}
                            placeholder="YYYY"
                            placeholderTextColor="gray"
                            maxLength={4}
                            keyboardType="numeric"
                            className="w-[80%] h-[60px] bg-white text-black text-xl rounded-2xl px-4"
                        />
                        <Text className="text-3xl text-center flex-shrink font-extrabold gap-4">당신을 위한 혜택이 있어요!</Text>
                        <TextInput
                        className="bg-white w-[80%] h-[60px] rounded-2xl p-2"
                        value={name}
                        onChangeText={setName}
                        placeholder="Name"
                        />
                        <TextInput
                        className="bg-white w-[80%] h-[60px] rounded-2xl p-2"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        />
                </View>
                <TouchableOpacity className="absolute bottom-0 flex items-center justify-center w-[80%] mt-40 p-4 my-4  bg-buttonBlue rounded-2xl" onPress={check}>
                    <Text className="text-white text-[20.7px] font-bold text-center">{t('check my benefit')}</Text>
                </TouchableOpacity>
            </View>
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
