import {View,Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import i18next from "@/services/i18next";
import { useTranslation } from 'react-i18next';
import ChangeLanguageMenu from "@/components/changeLanguageMenu";
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

                <View className="flex flex-col items-center w-full  sm:w-[640px] bg-background p-4">
                    <View className="flex-row items-center justify-center w-full  mb-2 ">
                        <Image source={require('../../assets/images/logo.png')}/>

                    </View>
                    <View className="bg-primary w-full rounded-3xl flex items-center pb-5 pl-3">
                        <View className="my-8 px-8 w-full ">
                            <Text className="font-bold text-4xl flex-shrink">{t('International students paid')}</Text>
                                <Text className="font-bold text-[40px] flex-shrink">{t('431,520')}</Text>
                            <Text className="font-bold text-4xl flex-shrink">{t('for health insurance every 6 months')}</Text>
                        </View>
                        <View className="px-8 mb-4 w-full ">
                            <Text className="font-bold text-3xl flex-shrink">{t('subtitle')}</Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center justify-between gap-8 p-4 rounded-xl bg-[#CCCCCC]" onPress={toggleMenu}>
                            <AntDesign name="earth" size={24} color="black" />
                            <Text className="text-center text-2xl font-bold">{t('language')}</Text>
                            <AntDesign name="right" size={20} color="black" className="" />
                        </TouchableOpacity>
                        {showMenu && <ChangeLanguageMenu setShowMenu={setShowMenu}/>}

                    </View>
                    <View className="flex-row items-center  w-full my-4 h-[110px] px-3 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <View className="gap-1  flex-1 w-full">
                        <Text  className="flex-shrink text-[18.4px] font-extrabold">{t('h-1')}</Text>
                        <Text className="flex-shrink text-[18.4px] font-light">{t('h-11')}</Text>
                    </View>

                    </View>
                    <View className="flex-row items-center w-full  mb-4 h-[110px] px-3 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <View className="gap-1  flex-1 w-full">
                        <Text className="flex-shrink text-[18.4px] font-extrabold">{t('h-2')}</Text>
                        <Text className="flex-shrink text-[18.4px] font-light">{t('h-22')}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 h-[110px] px-3 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <View className="gap-1  flex-1 w-full">
                        <Text className="flex-shrink text-[18.4px] font-extrabold">{t('h-3')}</Text>
                        <Text className="flex-shrink text-[18.4px] font-light">{t('h-33')}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 h-[110px] px-3 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <View className="gap-1  flex-1 w-full">
                        <Text className="flex-shrink text-[18.4px] font-extrabold">{t('h-4')}</Text>
                        <Text className="flex-shrink text-[18.4px] font-light">{t('h-44')}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center w-full  mb-4 h-[110px] px-3 gap-4 bg-primary rounded-3xl">
                        <Image resizeMode="contain" source={require('../../assets/images/check.png')} style={{width: 23, height: 26}}/>
                        <View className="gap-1  flex-1 w-full">
                        <Text  className="flex-shrink text-[18.4px] font-extrabold">{t('h-5')}</Text>
                        <Text  className="flex-shrink text-[18.4px] font-light">{t('h-55')}</Text>
                        </View>
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

                <View className="flex justify-center items-center my-10 gap-2">
                    <Text className="font-thin">상호명: Welkit</Text>
                    <Text className="font-thin">사업자등록번호: 849-06-03189|대표 : 유지원</Text>
                    <Text className="font-thin">jiwonn0207@gmail.com  010-8335-7026</Text>
                    <Text className="font-thin">경기도 수원시 영통구 센트럴파크로 33</Text>
                </View>


            </View>
        </ScrollView>



    )
}
export default Home
