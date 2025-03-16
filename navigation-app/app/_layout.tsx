import React, { useEffect } from "react";
import "./global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Bold": require("@/assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Black": require("@/assets/fonts/WorkSans-Black.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw new Error("Error loading fonts");
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded || error) {
    return null;
  }

  return <Slot />;
};

export default RootLayout;
