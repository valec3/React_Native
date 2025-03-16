import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { products } from "@/store/products.store";
const ProductsScreen = () => {
  return (
    <View className="flex-1">
      <Text className="text-3xl text-red-500">ProductsScreen</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="flex flex-1 border-[1px] border-blue-200 p-2 my-2 rounded-lg">
            <Text className="text-xl text-blue-500 font-bold my-1 ">
              {item.title}
            </Text>
            <Text className="text-gray-500">{item.description}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-green-500 font-bold text-xl">
                ${item.price}
              </Text>
              <Link
                className="bg-blue-500 text-white p-2 rounded-lg mt-2 w-fit"
                href={`./products/${item.id}`}
              >
                View Product
              </Link>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <Link to="/products/1">Product 1</Link> */}
    </View>
  );
};

export default ProductsScreen;
