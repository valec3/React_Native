import { View } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import SimpleText from '@/components/atoms/SimpleText';
import CalculatorButton from '@/components/CalculatorButton';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{ backgroundColor: 'red' }}>
                <SimpleText variant="primary" text="50*10" />

                <SimpleText text="256" variant="secondary" />
            </View>
            <View style={{ backgroundColor: 'blue', ...globalStyles.row }}>
                <CalculatorButton text="C" />
                <CalculatorButton text="+/-" />
                <CalculatorButton text="del" />
                <CalculatorButton text="/" />
                <CalculatorButton text="7" />
                <CalculatorButton text="8" />
                <CalculatorButton text="9" />
                <CalculatorButton text="X" />
                <CalculatorButton text="4" />
                <CalculatorButton text="5" />
                <CalculatorButton text="6" />
                <CalculatorButton text="-" />
                <CalculatorButton text="1" />
                <CalculatorButton text="2" />
                <CalculatorButton text="3" />
                <CalculatorButton text="+" />
                <CalculatorButton text="0" />
                <CalculatorButton text="." />
                <CalculatorButton text="=" />
            </View>
        </View>
    );
};
// 046 botones de la calculadora - Ready

export default CalculatorApp;
