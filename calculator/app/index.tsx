import { View } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-styles';
import SimpleText from '@/components/atoms/SimpleText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import useCalculator from '@/hooks/useCalculator';

const CalculatorApp = () => {
    const { formula, buildFormula, result } = useCalculator();
    return (
        <View style={globalStyles.calculatorContainer}>
            <View
                style={{
                    marginBottom: 15,
                }}
            >
                <SimpleText variant="primary" text={formula} />
                <SimpleText text={result} variant="secondary" />
            </View>
            <View style={{ ...globalStyles.row }}>
                <CalculatorButton
                    textColor="#000"
                    bgColor={Colors.lightGray}
                    text="C"
                    onPress={() => buildFormula('C')}
                />
                <CalculatorButton
                    textColor="#000"
                    bgColor={Colors.lightGray}
                    text="+/-"
                    onPress={() => buildFormula('+/-')}
                />
                <CalculatorButton
                    textColor="#000"
                    bgColor={Colors.lightGray}
                    text="del"
                    onPress={() => buildFormula('del')}
                />
                <CalculatorButton
                    bgColor={Colors.orange}
                    text="/"
                    onPress={() => buildFormula('/')}
                />
            </View>
            <View style={{ ...globalStyles.row }}>
                <CalculatorButton text="7" onPress={() => buildFormula('7')} />
                <CalculatorButton text="8" onPress={() => buildFormula('8')} />
                <CalculatorButton text="9" onPress={() => buildFormula('9')} />
                <CalculatorButton
                    bgColor={Colors.orange}
                    text="*"
                    onPress={() => buildFormula('*')}
                />
            </View>
            <View style={{ ...globalStyles.row }}>
                <CalculatorButton text="4" onPress={() => buildFormula('4')} />
                <CalculatorButton text="5" onPress={() => buildFormula('5')} />
                <CalculatorButton text="6" onPress={() => buildFormula('6')} />
                <CalculatorButton
                    bgColor={Colors.orange}
                    text="-"
                    onPress={() => buildFormula('-')}
                />
            </View>
            <View style={{ ...globalStyles.row }}>
                <CalculatorButton text="1" onPress={() => buildFormula('1')} />
                <CalculatorButton text="2" onPress={() => buildFormula('2')} />
                <CalculatorButton text="3" onPress={() => buildFormula('3')} />
                <CalculatorButton
                    bgColor={Colors.orange}
                    text="+"
                    onPress={() => buildFormula('+')}
                />
            </View>
            <View style={{ ...globalStyles.row }}>
                <CalculatorButton
                    text="0"
                    columnSpan={2}
                    onPress={() => buildFormula('0')}
                />
                <CalculatorButton text="." onPress={() => buildFormula('.')} />
                <CalculatorButton
                    bgColor={Colors.orange}
                    text="="
                    onPress={() => buildFormula('=')}
                />
            </View>
        </View>
    );
};
// 046 botones de la calculadora - Ready

export default CalculatorApp;
