import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import i18next from "@/services/i18next";
import { useTranslation } from 'react-i18next';
import ChangeLanguageMenu from "@/components/changeLanguageMenu";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import {router} from "expo-router";

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
                    <View className="flex-row items-center justify-center w-full  mb-2 ">
                        <Image source={require('../../assets/images/logo.png')}/>

                    </View>
                    <View className="bg-primary w-full rounded-3xl flex items-center pb-5">
                        <View className="my-8 px-8 w-full ">
                            <Text className="font-bold text-4xl flex-shrink">{t('International students paid')}</Text>
                                <Text className="font-bold text-[40px] flex-shrink">{t('431,520')}</Text>
                            <Text className="font-bold text-4xl flex-shrink">{t('for health insurance every 6 months')}</Text>
                        </View>
                        <View className="px-8 mb-4 w-full ">
                            <Text className="font-bold text-3xl flex-shrink">{t('subtitle')}</Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center justify-center  px-4 py-3 rounded-xl bg-[#CCCCCC]" onPress={toggleMenu}>
                            <Text className="text-center text-2xl font-bold pl-4">{t('language')}</Text>
                            <AntDesign name="right" size={20} color="black" className="ml-10" />
                        </TouchableOpacity>
                        {showMenu && <ChangeLanguageMenu setShowMenu={setShowMenu}/>}

                    </View>
                    <View className="flex-row items-center  w-full my-4 p-4 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <Text className="flex-shrink text-[18.4px]">{t('h-1')}</Text>

                    </View>
                    <View className="flex-row items-center w-full  mb-4 p-4 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <Text className="flex-shrink text-[18.4px]">{t('h-2')}</Text>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 p-4 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <Text className="flex-shrink text-[18.4px]">{t('h-3')}</Text>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 p-4 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <Text className="flex-shrink text-[18.4px]">{t('h-4')}</Text>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 p-4 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <Text className="flex-shrink text-[18.4px]">{t('h-5')}</Text>
                    </View>
                    {/*<View className="flex-row gap-2">*/}
                    {/*    <Checkbox  value={isChecked} onValueChange={setChecked} />*/}
                    {/*    <Text>{t('agree')}</Text>*/}
                    {/*</View>*/}

                    <TouchableOpacity
                        className="flex items-center justify-center w-full p-3 my-4 bg-buttonBlue rounded-2xl"
                        onPress={()=> router.push('/checkARC')}
                    >
                        <Text className="text-white text-center text-[20.7px] font-bold flex-shrink">{t('checkMyBenefit')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>



    )
}
export default Home
