import {Slot} from "expo-router";
import "./global.css";
import {SafeAreaView} from "react-native";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {useFonts} from "expo-font";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
});

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        Inter: require('../assets/fonts/Inter-SemiBold.ttf'),
        InterBold: require('../assets/fonts/Inter-SemiBold.ttf'),
    });

    if (!fontsLoaded) return null;

  return (
      <ConvexProvider client={convex}>
          <SafeAreaView className="flex-1 bg-background ">
              <Slot />
          </SafeAreaView>
      </ConvexProvider>
      );

}
