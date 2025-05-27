import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import BackBar from "@/components/BackBar";
import {t} from "i18next";
import { useUserInfo } from '@/stores/userInfo';

const Info = () => {
    const { setName, setEmail, setYear } = useUserInfo();

    const { year: routeYear } = useLocalSearchParams<{ year : string }>();
    const [name, setNameInput] = useState('');
    const [email, setEmailInput] = useState('');

    function check() {
        if(routeYear.length === 4 && name.trim() !== "" && email.trim() !== "") {
            // 전역 상태로 저장
            setYear(routeYear);
            setName(name);
            setEmail(email);

            router.push({
                pathname: '/myBenefit',
            })
        } else {
            alert("please fill all the fields!");
        }
    }

    return (
        <View className="flex-1 items-center">
            <View className="flex-1 flex-col items-center w-full sm:w-[640px] bg-background p-4">
                <BackBar/>
                <View className="flex w-full items-center justify-center p-8 rounded-3xl gap-4 bg-primary">
                    <Text className="text-3xl text-center flex-shrink font-extrabold gap-4 ">To confirm Benefits,
                        Essential information!</Text>
                    <TextInput
                    className="bg-white w-[241px] h-[44px] rounded-2xl p-2"
                    value={name}
                    onChangeText={setNameInput}
                    placeholder="Name"
                    />
                    <TextInput
                    className="bg-white w-[241px] h-[44px] rounded-2xl p-2"
                    value={email}
                    onChangeText={setEmailInput}
                    placeholder="Email"
                    />
                </View>
                <TouchableOpacity className="absolute bottom-0 flex items-center justify-center w-[80%] mt-8 p-4 my-4  bg-buttonBlue rounded-2xl" onPress={check}>
                    <Text className="text-white text-[20.7px] font-bold text-center">{t('check my benefit')}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Info
