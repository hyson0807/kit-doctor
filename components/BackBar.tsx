import {TouchableOpacity, View} from "react-native";
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export default function BackBar() {
    return (
        <View className="flex-row items-center justify-between w-full mb-5 ">
            <TouchableOpacity onPress={()=> router.back()} className="bg-primary w-12 flex items-center justify-center rounded-3xl">
                <AntDesign name="arrowleft" size={30} color="black"/>
            </TouchableOpacity>
        </View>
    )
}