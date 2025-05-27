import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import React from 'react';
import BackBar from "@/components/BackBar";
import { t } from "i18next";

const GetServices = () => {
    const accountNumber = "84883700007474 국민은행";

    const handleCopy = async () => {
        try {
            if (Platform.OS === 'web') {
                await navigator.clipboard.writeText(accountNumber);
                alert("Account number copied.");
            } else {
                const { setStringAsync } = await import('expo-clipboard');
                await setStringAsync(accountNumber);
                alert("Account number copied.");
            }
        } catch (err) {
            alert("Failed to copy account number.");
        }
    };

    return (
        <View className="flex-1 items-center">
            <View className="flex flex-col items-center w-full h-full sm:w-[640px] p-4">
                <BackBar />
                <View className="flex-1 w-full h-full m-5 gap-8">
                    {/*<TouchableOpacity*/}
                    {/*    className="flex items-center justify-center w-full h-[132px] bg-primary rounded-2xl p-1"*/}
                    {/*    onPress={handleCopy}*/}
                    {/*>*/}
                    {/*    <Text className="font-bold text-2xl text-center">*/}
                    {/*        {accountNumber}*/}
                    {/*    </Text>*/}
                    {/*</TouchableOpacity>*/}
                    <View className="flex-1 items-center justify-center w-full h-[132px] gap-10 bg-primary rounded-2xl p-2">
                        <Text className="text-[24px] text-center font-bold">Thanks for using it</Text>
                        <Text className="text-[24px] text-center font-bold">Tell me what you chose</Text>
                        <Text className="text-xl text-center font-semibold">( Dental care, Free check-up{'\n'}70% OFF Hospital Use )</Text>
                        <Text className="text-[24px] text-center font-bold">By your insurance{'\n'}already paid,{'\n'}we will help to use{'\n'}this medical service!</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default GetServices;
