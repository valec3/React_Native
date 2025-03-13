import React from 'react';
import { Text, Pressable } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
// import * as Haptics from 'expo-haptics';
interface CalculatorButtonProps {
    text: string;
    bgColor?: string;
    onPress?: () => void;
    textColor?: string;
    columnSpan?: number;
}
const CalculatorButton = ({
    textColor = Colors.textPrimary,
    bgColor = Colors.darkGray,
    text,
    onPress = () => console.log('Button pressed'),
    columnSpan = 1,
}: CalculatorButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.calculatorButton,
                backgroundColor: bgColor,
                opacity: pressed ? 0.8 : 1,
                width: columnSpan === 2 ? 170 : 80,
            })}
            onPress={() => {
                // Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text
                style={{
                    ...globalStyles.calculatorButtonText,
                    color: textColor,
                }}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default CalculatorButton;
