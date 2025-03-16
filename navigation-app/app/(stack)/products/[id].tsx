import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/store/products.store";

const DetailProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View>
      <Text className="text-3xl text-red-500">DetailProductScreen</Text>
      <Text className="text-xl text-blue-500 font-bold my-1 ">
        {product.title}
      </Text>
      <Text className="text-gray-500">{product.description}</Text>
      <Text className="text-green-500 font-bold text-xl">${product.price}</Text>
    </View>
  );
};

export default DetailProductScreen;
