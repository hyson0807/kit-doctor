import {Slot} from "expo-router";
import "./global.css";
import {SafeAreaView} from "react-native";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
      <ConvexProvider client={convex}>
          <SafeAreaView className="flex-1 bg-background ">
              <Slot />
          </SafeAreaView>
      </ConvexProvider>
      );

}
