import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface CustomButtonProps extends PressableProps {
  text: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "solid" | "outline" | "text-only";
}

const CustomButton = React.forwardRef(
  (
    {
      text = "boton",
      color = "primary",
      variant = "solid",
      onPress = () => {},
      onLongPress = () => {},
    }: CustomButtonProps,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    if (variant === "outline") {
      return (
        <Pressable
          className={`p-3 rounded-md border border-primary active:opacity-80 `}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className="text-black text-center font-bold">{text}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-80 `}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-bold">{text}</Text>
      </Pressable>
    );
  }
);

export default CustomButton;
