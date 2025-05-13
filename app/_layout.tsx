import {Slot} from "expo-router";
import "./global.css";
import {SafeAreaView} from "react-native";

export default function RootLayout() {
  return (
      <SafeAreaView className="flex-1 bg-background ">
        <Slot />
      </SafeAreaView>
      );

}
