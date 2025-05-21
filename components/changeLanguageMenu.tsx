import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import i18next from "@/services/i18next";


interface MenuProps {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

    const ChangeLanguageMenu: React.FC<MenuProps> = ({setShowMenu}) => {
    return (
        <View className="w-36 bg-primary rounded-xl shadow-md p-1 z-50">
            <TouchableOpacity className="p-2" onPress={()=> {
                i18next.changeLanguage('en');
                setShowMenu(false);
            }}>
                <Text>English</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={()=> {
                i18next.changeLanguage('ko');
                setShowMenu(false);
            }}>
                <Text>Korean</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={() => {
                i18next.changeLanguage('ch');
                setShowMenu(false);
            }}>
                <Text>Chinese</Text>
            </TouchableOpacity>

            <TouchableOpacity className="p-2" onPress={() => {
                i18next.changeLanguage('vt');
                setShowMenu(false);
            }}>
                <Text>Vietnam</Text>
            </TouchableOpacity>

            <TouchableOpacity className="p-2" onPress={() => {
                i18next.changeLanguage('uz');
                setShowMenu(false);
            }}>
                <Text>O‘zbekiston tili</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangeLanguageMenu;

