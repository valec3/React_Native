import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Link href="/" className="text-primary-500">
        Go to home
      </Link>
    </View>
  );
};

export default ProfileScreen;
