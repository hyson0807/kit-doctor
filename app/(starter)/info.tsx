import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import BackBar from "@/components/BackBar";
import {t} from "i18next";
import { useUserInfo } from '@/stores/userInfo';
import { Checkbox } from 'react-native-paper';

const Info = () => {
    const { setName, setEmail, setYear } = useUserInfo();

    const { year: routeYear } = useLocalSearchParams<{ year : string }>();
    const [name, setNameInput] = useState('');
    const [email, setEmailInput] = useState('');

    const [checked, setChecked] = React.useState(false);

    function check() {
        if(routeYear.length === 4 && name.trim() !== "" && email.trim() !== "" && checked) {
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
                    <Text className="text-3xl text-center flex-shrink font-extrabold gap-4 ">{t('To confirm Benefits, Essential information!')}</Text>
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


                <View className="flex items-center justify-center absolute bottom-0">
                    <View className="flex-row items-center justify-center gap-2">
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(!checked)}
                                color="#1682F9"
                            />
                        <Text>{t('Agree to Terms of Service and Privacy Policy')}</Text>
                    </View>
                    <TouchableOpacity className=" flex items-center justify-center w-full p-4 mb-4  bg-buttonBlue rounded-2xl" onPress={check}>
                        <Text className="text-white text-[20.7px] font-bold text-center">{t('check my benefit')}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default Info
