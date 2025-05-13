import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import i18next from "@/services/i18next";
import { useTranslation } from 'react-i18next';
import ChangeLanguageMenu from "@/components/changeLanguageMenu";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {MaterialIcons} from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Checkbox} from "expo-checkbox";

const Home = () => {
    const [isChecked, setChecked] = useState(false);
    const { t } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <ScrollView>
            <View className="flex-1 items-center ">

                <View className="flex flex-col items-center w-full h-full sm:w-[640px] bg-background p-4">
                    {showMenu && <ChangeLanguageMenu setShowMenu={setShowMenu}/>}
                    <View className="flex-row items-center justify-between w-full h-20 mb-2">
                        <Image source={require('../../assets/images/logo.png')}/>
                        <TouchableOpacity className="flex-row items-center justify-between w-36 px-1 h-10 rounded-xl bg-primary" onPress={toggleMenu}>

                            <MaterialIcons name="language" size={24} color="black" />
                            <Text className="text-center">{t('language')}</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="bg-primary w-full rounded-3xl">
                        <View className="my-8 px-8 w-full ">
                            <Text className="font-extrabold text-4xl">{t('title')}</Text>
                        </View>
                        <View className="px-8 mb-4 w-full ">
                            <Text className="font-extrabold text-4xl">{t('subtitle')}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center  w-full h-20 my-4 px-4 gap-4 bg-primary rounded-3xl">
                        <FontAwesome name="check-circle" size={24} color="blue" />
                        <Text className="flex-shrink">{t('h-1')}</Text>
                    </View>
                    <View className="flex-row items-center w-full h-20 mb-4 px-4 gap-4 bg-primary rounded-3xl">
                        <FontAwesome name="check-circle" size={24} color="blue" />
                        <Text className="flex-shrink">{t('h-2')}</Text>
                    </View>
                    <View className="flex-row items-center w-full h-20 mb-4 px-4 gap-4 bg-primary rounded-3xl">
                        <FontAwesome name="check-circle" size={24} color="blue" />
                        <Text className="flex-shrink">{t('h-3')}</Text>
                    </View>
                    <View className="flex-row items-center w-full h-20 mb-4 px-4 gap-4 bg-primary rounded-3xl">
                        <FontAwesome name="check-circle" size={24} color="blue" />
                        <Text className="flex-shrink">{t('h-4')}</Text>
                    </View>
                    <View className="flex-row gap-2">
                        <Checkbox  value={isChecked} onValueChange={setChecked} />
                        <Text>{t('agree')}</Text>
                    </View>

                    <TouchableOpacity className="flex items-center justify-center w-[80%] h-12 my-4  bg-buttonBlue rounded-2xl">
                        <Text className="text-white">{t('checkMyBenefit')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>



    )
}
export default Home
