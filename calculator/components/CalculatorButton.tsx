import React from 'react';
import { Text, Pressable } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
interface CalculatorButtonProps {
    text: string;
    bgColor?: string;
    onPress?: () => void;
    textColor?: string;
}
const CalculatorButton = ({
    textColor = Colors.textPrimary,
    bgColor = Colors.darkGray,
    text,
    onPress,
}: CalculatorButtonProps) => {
    return (
        <Pressable style={globalStyles.calculatorButton} onPress={onPress}>
            <Text
                style={{
                    ...globalStyles.calculatorButtonText,
                    color: textColor,
                    backgroundColor: bgColor,
                }}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default CalculatorButton;
