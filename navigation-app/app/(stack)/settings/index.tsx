import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Link href="/" className="text-primary-500">
        Go to home
      </Link>
    </View>
  );
};

export default SettingsScreen;
