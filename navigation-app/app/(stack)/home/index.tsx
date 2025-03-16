import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-11 gap-3">
        <Text>HomeScreen</Text>
        <CustomButton
          text="Go to Products"
          onPress={() => router.push("./products")}
        />
        <CustomButton
          text="Go to Profile"
          onPress={() => router.push("./profile")}
          variant="outline"
        />
        <CustomButton
          text="Go to Settings"
          onPress={() => router.push("./settings")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
